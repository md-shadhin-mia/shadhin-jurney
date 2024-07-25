import { Pool } from "pg";
import migrate from "./tools/migrate";

class DatabaseSingleton {
  private static instance: DatabaseSingleton | null = null;
  private pool: Pool | null = null;

  private constructor() {}

  public static getInstance(): DatabaseSingleton {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }
    return DatabaseSingleton.instance;
  }

  public async getConnection(): Promise<Pool> {
    if (!this.pool) {
      try {
        this.pool = new Pool({
          host: process.env.DATABASE_HOST,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          ssl: process.env.DATABASE_SSL === "true",
        });

        this.pool.on('connect', () => {
          console.log('Database connected!');
          migrate(this.pool!);
        });

        // Wait for the first connection to be established
        await this.pool.connect();
      } catch (error) {
        console.error("Database connection failed!", error);
        throw error;
      }
    }
    return this.pool;
  }
}

export default DatabaseSingleton.getInstance();