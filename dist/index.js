import { CurlImpersonate } from "node-curl-impersonate";
import { insertAmiAmiData, createAmiAmiTable } from "./db.js";
let ci = new CurlImpersonate("https://api.amiami.com/api/v1.0/items?s_keywords=touhou%20plush&pagecnt=1&pagemax=30&lang=eng", {
    method: "GET",
    headers: {
        "X-User-Key": "amiami_dev"
    },
    impersonate: "chrome-110",
}).makeRequest().then(async (data) => {
    if (data.response == '') {
        throw new Error("No response from url!");
    }
    let json = JSON.parse(data.response);
    let items = json.items;
    await createAmiAmiTable();
    items.forEach((item) => {
        insertAmiAmiData(item);
    });
});
//# sourceMappingURL=index.js.map