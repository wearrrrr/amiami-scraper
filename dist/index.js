import CurlImpersonate from "node-curl-impersonate";
let ci = new CurlImpersonate("https://api.amiami.com/api/v1.0/items?pagemax=20&lang=eng&mcode=&ransu=&age_confirm=&s_keywords=touhouplush", {
    method: "GET",
    flags: ["--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA", "--http2", "--http2-no-server-push", "--compressed", "--tlsv1.2", "--alps", "--tls-permute-extensions", "--cert-compression brotli"],
    headers: {
        "sec-ch-ua": `"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"`,
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "X-User-Key": "amiami_dev"
    },
    verbose: true,
});
let req = await ci.makeRequest();
console.log(req);
// const db = new Database("amiami.db");
// function insertIntoDB(data) {
//   db.exec("CREATE TABLE if NOT EXISTS data (item TEXT)");
//   // Check if item already exists in db
//   const checkData = db.prepare("SELECT * FROM data WHERE item = $item");
//   const dataExists = checkData.get({ $item: data });
//   if (dataExists) {
//     console.log("Data already exists");
//     process.exit(0);
//   }
//   const insertData = db.prepare("INSERT INTO data (item) VALUES ($item)");
//   const insertAllData = db.transaction(data_list => {
//     for (const data of data_list) insertData.run(data);
//   });
//   insertAllData([
//     { $item: data },
//   ]);
// }
// insertIntoDB(data);
//# sourceMappingURL=index.js.map