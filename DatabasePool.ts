import { Pool } from "pg";
import migrate from "./tools/migrate";

let dbConnection;

if (!dbConnection) {
    dbConnection = new Pool({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        ssl: true,
    });
    migrate(dbConnection)

    console.log("connection istablished");

}

export default (dbConnection satisfies (Pool | undefined));