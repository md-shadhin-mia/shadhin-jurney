import { log, error } from "console";
import { Pool } from "pg";

const fs = require('fs');
const path = require('path');
//read sql file


async function migrate(conn: Pool) {
    const sql:String = fs.readFileSync(path.join(process.cwd(), "migrations/tables.sql"), 'utf8');
    try {
        const migrations = `
        CREATE TABLE IF NOT EXISTS migrations(
            id serial PRIMARY KEY,
            mindex int
        );
        `;
        await conn.query(migrations);
        const stements = sql.split(";");
        const [{max_index}] = (await conn.query<{max_index:number}>("select max(mindex) as max_index  from migrations;")).rows;
        // console.log(f);
        
        console.log(`0 to ${max_index} Already Migrated `);
        
        for (let i = max_index; i < stements.length-1; i++) {
            const stetement = stements[i];
            await conn.query(stetement+";");
            console.log("Exicuting : "+stetement);
            await conn.query(`INSERT into migrations (mindex) values ('${i}')`);
        }
    } catch (e) {
        error(e);
    }
}


export default migrate;