import { CurlImpersonate } from "node-curl-impersonate";
import { insertAmiAmiData } from "./db.js";
import * as fs from "node:fs"

let ci = new CurlImpersonate("https://api.amiami.com/api/v1.0/items?pagemax=30&pagecnt=1&lang=eng&s_keywords=touhou%20fumofumo", {
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
}).makeRequest().then((data) => {
  console.log(data)
  fs.writeFileSync("data.json", data.response)
  // insertAmiAmiData(JSON.parse(data.response), 0, "")
})


