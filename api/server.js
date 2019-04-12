const express = require("express");
const db = require("../database/dbConfig");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Hello from the Server" });
});

server.get("/games", async (req, res) => {
  const games = await db("games");

  try {
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "error trying to get the games" });
  }
});

module.exports = server;
