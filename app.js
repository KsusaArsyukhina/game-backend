const staticFile = require("./appModules/http-utils/static-file");
const http = require("http");
const path = require("path");
const mimeTypes = require("./appModules/http-utils/mime-types");
const mainRouteController = require("./controllers/main");
const defaultRouteController = require("./controllers/default");
const gameRouteController = require("./controllers/game");
const voteRouteController = require("./controllers/vote");

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      if (req.method !== "GET") {
        res.statusCode = 405;
        res.end(
          "запрещённый метод запроса, по данному url доступен только GET"
        );
      }
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});
server.listen(3005);
