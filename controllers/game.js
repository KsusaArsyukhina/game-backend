const fs = require("fs").promises;
const { config } = require("../appModules/rating");
const { getRandomGame } = require("../appModules/api");

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
    const data = JSON.parse(ratingFile);
    console.log(data);
    const game = getRandomGame(data);
    console.log(1);
    console.log(game);
    console.log(2);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (error) {
    res.statusCode = 500;
    res.end("Internal server Error");
  }
}
module.exports = gameRouteController;
