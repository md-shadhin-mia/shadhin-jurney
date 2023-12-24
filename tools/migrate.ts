import { log } from "console";
import { Pool } from "pg";

const fs = require('fs');
const path = require('path');
//read sql file
const sql = fs.readFileSync(path.join(process.cwd(), "migrations/tables.sql"), 'utf8');


async function migrate(conn: Pool) {
    try {
        log(sql);
        await conn.query(sql);
    } catch (e) {
        console.log(e);
    }
}


export default migrate;