const express = require("express");
const db = require("../database/dbConfig");
const server = express();
const dbHelpers = require("../database/gameModel");

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Hello from the Server" });
});

server.get("/games", async (req, res) => {
  const games = await dbHelpers.getAllGames();

  try {
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "error trying to get the games" });
  }
});

server.post("/games", async (req, res) => {
  const body = req.body;

  if (body.title && body.genre) {
    try {
      const ids = await db("games").insert(body);
      res.status(201).json(ids);
    } catch (error) {
      res
        .status(500)
        .json({ error: "error trying to save the user in database" });
    }
  } else {
    res.status(422).json({ message: "Incomplete information" });
  }
});

module.exports = server;
