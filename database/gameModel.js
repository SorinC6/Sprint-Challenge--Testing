const db = require("./dbConfig");

async function getAllGames() {
  return await db("games");
}

async function addGame(game) {
  const [id] = await db("games").insert(game);

  return getGameByID(id);
}

async function getGameByID(id) {
  const game = await db("users")
    .where({ id })
    .first();
  return game;
}

module.exports = {
  getAllGames,
  addGame,
  getGameByID
};
