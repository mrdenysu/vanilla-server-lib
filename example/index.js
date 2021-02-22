const { createSecureServer } = require("http2");
const { readFileSync } = require("fs");
const { VanillaWebServer } = require("../lib/VanillaWebServer");
const { join } = require("path");

const PORT = 443;
const HOST = "127.0.0.1";
const SSL = {
  key: readFileSync(join(__dirname, "localhost.key"), "utf8"),
  cert: readFileSync(join(__dirname, "localhost.crt"), "utf8"),
};

const vws = new VanillaWebServer();

vws
  .route("GET", "/", async (s, w) => {
    w.json({
      method: s.method,
      url: s.url,
      pathname: s.pathname,
      params: s.params,
      query: await s.parseQuery(),
      body: await s.parseBody(),
    });
  })
  .share("/docs", join(__dirname, "../docs"))
  .share("/example", join(__dirname));

createSecureServer(SSL, vws.listener).listen(PORT, HOST, () => {
  console.log(`Server listen at: https://${HOST}:${PORT}/`);
});
