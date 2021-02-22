const { createSecureServer } = require("http2");
const { readFileSync } = require("fs");
const { join } = require("path");

const { VanillaWebServer } = require("../lib/VanillaWebServer");
const ejs = require("ejs");

const PORT = 443;
const HOST = "127.0.0.1";
const SSL = {
  key: readFileSync(join(__dirname, "localhost.key"), "utf8"),
  cert: readFileSync(join(__dirname, "localhost.crt"), "utf8"),
};

const vws = new VanillaWebServer({
  render: {
    engine: ejs.renderFile,
    options: {
      async: true,
      beautify: true,
      cache: false,
    },
    viewPath: join(__dirname, "views"),
  },
});

vws
  .error404(async (_, w) => {
    // Custom error hendler
    w.error(404, "Hmm... error 404");
  })

  .error500(async (_, w) => {
    // Custom error hendler
    w.error(500, "Ooops...");
  })

  /* Routing */
  .route("GET", "/", async (s, w) => {
    w.json({
      text: "Hello from http && vanilla-server-lib",
    });
  })

  .route("GET", "/test/:id+", testPage)
  .route("POST", "/test/:id+", testPage)
  .route("DELETE", "/test/:id+", testPage)
  .route("PUT", "/test/:id+", testPage)

  .route("GET", "/hello", indexPage)
  .route("POST", "/hello", indexPage)
  .route("DELETE", "/hello", indexPage)
  .route("PUT", "/hello", indexPage)

  .share("/example", join(__dirname)); // Static files

async function testPage(s, w) {
  w.json({
    method: s.method,
    url: s.url,
    pathname: s.pathname,
    params: s.params,
    query: await s.parseQuery(),
    body: await s.parseBody(),
  });
}

function indexPage(_, w) {
  w.render("index.ejs", {
    method: _.method,
  });
}

createSecureServer(SSL, vws.listener).listen(PORT, HOST, () => {
  console.log(`Server listen at: https://${HOST}:${PORT}/`);
});
