const staticFile = require("../appModules/http-utils/static-file");
const fs = require("fs").promises;
const { config, makeRatingFile } = require("../appModules/rating");

const { getData, endpoints } = require("../appModules/api");
async function mainRouteController(res, publicUrl, extname) {
  const data = await getData(endpoints.game);

  await makeRatingFile(config.PATH_TO_RATING_FILE, data);

  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}
module.exports = mainRouteController;
