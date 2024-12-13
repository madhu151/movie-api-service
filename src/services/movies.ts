import axios from "axios";

const TMDB_API_URL = "https://api.themoviedb.org/3";

interface Movie {
    title: string;
    release_date: string;
    vote_average: number;
    editors: string[];
}

export const getMoviesByYear = async (year: string): Promise<Movie[]> => {
    const apiKey = process.env.TMDB_API_KEY;

    try {
        const { data: discoverData } = await axios.get(`${TMDB_API_URL}/discover/movie`, {
            params: {
                api_key: apiKey,
                language: "en-US",
                page: 1,
                primary_release_year: year,
                sort_by: "popularity.desc"
            }
        });

        const movies = await Promise.all(
            discoverData.results.map(async (movie: any) => {
                try {
                    const { data: creditData } = await axios.get(`${TMDB_API_URL}/movie/${movie.id}/credits`, {
                        params: { api_key: apiKey }
                    });

                    const editors = creditData.crew
                        .filter((member: any) => member.known_for_department === "Editing")
                        .map((editor: any) => editor.name);

                    return {
                        title: movie.title,
                        release_date: movie.release_date,
                        vote_average: movie.vote_average,
                        editors
                    };
                } catch {
                    return {
                        title: movie.title,
                        release_date: movie.release_date,
                        vote_average: movie.vote_average,
                        editors: []
                    };
                }
            })
        );

        return movies;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error("Could not fetch movies");
    }
};
