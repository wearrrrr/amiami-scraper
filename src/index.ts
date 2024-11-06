import { CurlImpersonate } from "node-curl-impersonate";
import { insertAmiAmiData, createAmiAmiTable, getFumosInStock, getFumosForPreorder } from "./db.js";

let ci = new CurlImpersonate("https://api.amiami.com/api/v1.0/items?s_keywords=touhou%20plush&pagecnt=1&pagemax=30&lang=eng", {
  method: "GET",
  headers: {
      "X-User-Key": "amiami_dev"
  },
  impersonate: "firefox-109",
})
const request = await ci.makeRequest()
if (request.response == "") {
    throw new Error("No response from url!")
}
let json = JSON.parse(request.response)
let items = json.items;
let len = items.length;
await createAmiAmiTable();
for (let i = 0; i < len; i++) {
    await insertAmiAmiData(items[i], true)
};
let fumosInStock = await getFumosInStock();
let fumosForPreorder = await getFumosForPreorder();
console.log(`Inserted ${len} items into the database!`);
console.log(`There are ${fumosInStock.length} Fumos in stock!`);
console.log(`There are ${fumosForPreorder.length} Fumos for preorder!`);

