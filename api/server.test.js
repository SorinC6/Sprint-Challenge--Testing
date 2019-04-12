const request = require("supertest");
const server = require("./server.js");
const db = require("../database/dbConfig");

describe("Testing Endpoints", () => {
  describe("test GET /games endpoint requests", () => {
    it("endpoint should return the list of games and HTTP status code 200.", async () => {
      const response = await request(server).get("/games");

      expect(response.status).toBe(200);
    });

    it("responds with JSON", async () => {
      const response = await request(server).get("/games");

      expect(response.type).toMatch(/json/i);
    });

    it("sends back correct items", async () => {
      const response = await request(server).get("/games");

      expect(response.body).toEqual([]);
    });

    it("sends back correct type", async () => {
      const response = await request(server).get("/games");

      expect(Array.isArray(response.body)).toBeDefined();
    });
  });

  describe("test POST /games endpoint requests", () => {
    afterEach(async () => {
      await db("games").truncate();
    });

    it("respond with status 201 if succed", async () => {
      const body = { title: "pacman", genre: "arcade", releaseYear: 1984 };
      const response = await request(server)
        .post("/games")
        .send(body);

      expect(response.status).toBe(201);
    });
  });
});
