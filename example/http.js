const http = require("http");
const { join } = require("path");

const { VanillaWebServer } = require("vanilla-server-lib");
const ejs = require("ejs");

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

http.createServer(vws.listener).listen(80, () => {
  console.log("http://localhost/");
});
