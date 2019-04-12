const request = require("supertest");
const server = require("./server.js");

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
  });
  
});
