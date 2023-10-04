import * as BetterSqlite3 from 'better-sqlite3';
const db = new BetterSqlite3.default("amiami.db", {
    verbose: console.log
});
export async function insertAmiAmiData(name, price, image) {
    const stmt = db.prepare('INSERT INTO amiami (name, price, image) VALUES (?, ?, ?)');
    const info = stmt.run(name, price, image);
    console.log(info);
}
//# sourceMappingURL=db.js.map