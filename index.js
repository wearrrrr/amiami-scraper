import { CurlImpersonate } from "node-curl-impersonate";

const ci = new CurlImpersonate("https://api.amiami.com/api/v1.0/item?gcode=GOODS-04390414", {
    method: "GET",
    headers: {
      'sec-ch-ua': 'Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110',
      'sec-ch-ua-mobile': "?0",
      'x-user-key': 'amiami_dev',
      'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
    },
    flags: ["--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA", '--http2', '--http2-no-server-push', '--false-start', '--compressed', '--tlsv1.2', '--no-npn', '--alps', '--tls-permute-extensions', '--cert-compression brotli'],
    timeout: 10000,
    followRedirects: true,
});

ci.makeRequest();

// const curl_impersonate = (url, arguments) => {
//   return new Promise((resolve, reject) => {
//     let bin = "";
//     switch (process.platform) {
//       case "linux":
//           if (process.arch == "x64") {
//               bin = "curl-impersonate-chrome-linux-x64";
//               break;
//           } else if (process.arch == "arm") {
//               bin = "curl-impersonate-chrome-linux-aarch64";
//               break;
//           } else {
//               throw new Error(`Unsupported architecture: ${process.arch}`);
//           }

//       case "darwin":
//           bin = "curl-impersonate-chrome-darwin-x86";
//           break;
//       default:
//           reject(new Error(`Unsupported platform: ${process.platform}`));
//     }
//     const cmd = `./bin/curl-impersonate-chrome-linux-x86 ${arguments.join(" ")} ${url}`;
//     let req = proc.spawn(cmd, { shell: true });
//     req.stdout.on('data', (data) => {
//       let parse = JSON.parse(data)
//       if (parse.RSuccess == false) {
//           reject(new Error(`${data}`));
//       }
//       fs.writeFileSync("data.json", JSON.stringify(JSON.parse(data.toString()), null, 2));
//       resolve("Command executed successfully.");
//     });
//     req.on('close', (code) => {
//       if (code !== 0) {
//         reject(new Error(`Command exited with code ${code}`));
//       }
//     });
//   });
// };

// const DEFAULT_OPTIONS = {
//   logging: false,
// }

// async function make_request_by_id(itemID, options = DEFAULT_OPTIONS) {
//   try {
//     if (options.logging) {
//       console.time("Request Time")
//     }
    
//     await curl_impersonate(`https://api.amiami.com/api/v1.0/item?gcode=${itemID}`, [
//       "--ciphers TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA",
//       `-H 'sec-ch-ua: "Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"'`,
//       `-H 'sec-ch-ua-mobile: ?0'`,
//       `-H 'sec-ch-ua-platform: "Windows"'`,
//       `-H 'Upgrade-Insecure-Requests: 1'`,
//       `-H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'`,
//       `-H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'`,
//       `-H 'x-user-key: amiami_dev'`,
//       '--http2', '--http2-no-server-push', '--false-start', '--compressed',
//       '--tlsv1.2', '--no-npn', '--alps', '--tls-permute-extensions', '--cert-compression brotli',
//     ]).then(() => {
//       if (options.logging) {
//         console.log("JSON requested successfully.");
//         console.timeEnd("Request Time");
//       }
//     });
//   } catch (error) {
//     console.error("Error making request:", error);
//   }
// }

// make_request_by_id("GOODS-04390414", {
//     logging: true
// });
