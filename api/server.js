const express = require("express");
//const db = require("../database/dbConfig");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Hello from the Server" });
});

module.exports = server;
