import type { Database } from 'better-sqlite3'; 
import * as BetterSqlite3 from 'better-sqlite3';
import { AmiAmiItem } from './types.js';

const db: Database = new BetterSqlite3.default("amiami.db", {
    
})

export async function createAmiAmiTable() {
    db.prepare('CREATE TABLE IF NOT EXISTS amiami (id INTEGER PRIMARY KEY AUTOINCREMENT, gname TEXT, min_price INTEGER, image TEXT, gcode TEXT, maker_name TEXT, instock_flg INTEGER, list_preorder_available INTEGER)').run()
}

export async function getItemsInStock() {
    return db.prepare('SELECT * FROM amiami WHERE instock_flg = 1').all();
}

export async function getItemsForPreorder() {
    return db.prepare('SELECT * FROM amiami WHERE list_preorder_available = 1').all();
}

export async function getFumosInStock() {
    const instock: AmiAmiItem[] = await getItemsInStock() as AmiAmiItem[];
    // Filter out the Fumos
    return instock.filter((item: AmiAmiItem) => {
        return item.gname.includes("Fumo");
    });
}

export async function getFumosForPreorder() {
    const preorder: AmiAmiItem[] = await getItemsForPreorder() as AmiAmiItem[];

    return preorder.filter((item: AmiAmiItem) => {
        return item.gname.includes("Fumo");
    });
}

export async function insertAmiAmiData(data: AmiAmiItem, silent: boolean = false) {
    // Check if a record with the same gcode exists
    const existingRecord: any = await db.prepare('SELECT * FROM amiami WHERE gcode = ?').get(data.gcode);

    if (!existingRecord) {
        // Insert the data only if it doesn't exist
        const stmt = db.prepare('INSERT INTO amiami (gname, min_price, image, gcode, maker_name, instock_flg, list_preorder_available) VALUES (?, ?, ?, ?, ?, ?, ?)');
        stmt.run(data.gname, data.min_price, data.thumb_url, data.gcode, data.maker_name, data.instock_flg, data.list_preorder_available);
        if (silent) return;
        console.log("Inserted " + data.gcode + " into database!");
    } else {
        if (existingRecord.min_price !== data.min_price || existingRecord.instock_flg !== data.instock_flg || existingRecord.list_preorder_available !== data.list_preorder_available) {
            const updateStmt = db.prepare('UPDATE amiami SET gname = ?, min_price = ?, instock_flg = ?, list_preorder_available = ? WHERE gcode = ?');
            updateStmt.run(data.gname, data.min_price, data.instock_flg, data.list_preorder_available, data.gcode);
            if (silent) return;
            console.log("Updated " + data.gcode + " in the database.");
        } else {
            if (silent) return;
            console.log("Data with gcode " + data.gcode + " is up to date in the database.");
        }
    }
}