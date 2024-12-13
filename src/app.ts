import express, { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
import { getMoviesByYear } from "./services/movies";

dotenv.config();

const app = express();
const port = 3000;

app.get("/movies/:year", async (req: Request<{ year: string }>, res: Response): Promise<any> => {
    const year = req.params.year;
    const sanitizedYear = year.trim();

    if (!/^\d{4}$/.test(sanitizedYear)) {
        return res.status(400).json({ error: "Invalid year format. Use YYYY." });
    }

    try {
        const movies = await getMoviesByYear(year);
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;
