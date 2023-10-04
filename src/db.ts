import type { Database } from 'better-sqlite3'; 
import * as BetterSqlite3 from 'better-sqlite3';

const db: Database = new BetterSqlite3.default("amiami.db", {
    verbose: console.log
})

export async function insertAmiAmiData(name: string, price: number, image: string) {
    const stmt = db.prepare('INSERT INTO amiami (name, price, image) VALUES (?, ?, ?)');
    const info = stmt.run(name, price, image);
    console.log(info);
}