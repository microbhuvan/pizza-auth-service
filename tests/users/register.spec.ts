import request from "supertest";
import app from "../../src/app.js";

describe("POST /auth/register", () => {
  describe("Given all fields", () => {
    it("should return the 201 status code", async () => {
      //AAA -> Arrange
      const userData = {
        firstName: "Tom",
        lastName: "Holland",
        email: "tomholland@gmail.com",
        password: "secret",
      };

      //act
      const response = await request(app).post("/auth/register").send(userData);

      //assert
      expect(response.statusCode).toBe(201);
    });

    it("should return valid json response", async () => {
      const userData = {
        firstName: "Tom",
        lastName: "Holland",
        email: "tomholland@gmail.com",
        password: "secret",
      };

      const response = await request(app).post("/auth/register").send(userData);

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );
    });
  });

  describe("Fields are missing", () => {}); //fields are mssin
});
