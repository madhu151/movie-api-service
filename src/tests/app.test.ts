import request from "supertest";
import app from "../app";

jest.mock("../services/movies", () => ({
    getMoviesByYear: jest.fn((year: string) => [
        {
            title: "Joker",
            release_date: "2019-01-01",
            vote_average: 8.19,
            editors: ["Jeff Groth", "Jill Bogdanowicz"]
        }
    ])
}));

describe("GET /movies/:year", () => {
    it("should return movies for a valid year", async () => {
        const response = await request(app).get("/movies/2019");
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                title: "Joker",
                release_date: "2019-01-01",
                vote_average: 8.19,
                editors: ["Jeff Groth", "Jill Bogdanowicz"]
            }
        ]);
    });

    it("should return 400 for an invalid year format", async () => {
        const response = await request(app).get("/movies/20a9");
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid year format. Use YYYY." });
    });
});
