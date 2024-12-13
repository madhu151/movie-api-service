# Movie API Service

This is a Node.js application that provides an API to fetch movies for a given year, sorted by descending popularity.
---

## Features

- Fetches movies for a given year (YYYY format).
- Returns movies sorted by descending popularity.
- Includes movie title, release date, vote average, and a list of editors.
- Resilient against TMDB credits API failures (editors are optional in the response).
- Built with TypeScript.
- Includes unit tests for key functionalities.

---

## Prerequisites

- **Node.js**: Version 21 or higher
- **NPM**: Installed with Node.js

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>

# Install packages
npm install

# Create .env file and add key
TMDB_API_KEY=your_tmdb_api_key_here

# Start the app that runs at http://localhost:3000.
npm run start

```
# Here is the API url and it's response.
- http://localhost:3000/movies/2019

- [
    {
        "title": "The Lion King",
        "release_date": "2019-07-12",
        "vote_average": 7.116,
        "editors": [
            "Mark Livolsi"
        ]
    },
    {
        "title": "How to Train Your Dragon: The Hidden World",
        "release_date": "2019-01-03",
        "vote_average": 7.751,
        "editors": [
            "Brit DeLillo",
            "Natalia Cronembold",
            "John K. Carr"
        ]
    },
    {
        "title": "Joker",
        "release_date": "2019-10-01",
        "vote_average": 8.1,
        "editors": [
            "Jeff Groth",
            "Jeff Mee",
            "Ray Neapolitan",
            "Thomas J. Cabela",
            "Jill Bogdanowicz",
            "Cindy Bond",
            "Jason Saulog"
        ]
    },
    {
        "title": "Busty Girlfriend",
        "release_date": "2019-03-08",
        "vote_average": 7.5,
        "editors": []
    },
    {
        "title": "Avengers: Endgame",
        "release_date": "2019-04-24",
        "vote_average": 8.247,
        "editors": [
            "Jeffrey Ford",
            "Matthew Schmidt",
            "Dan Carney",
            "Hector Padilla",
            "Scott Fox",
            "Paul Ensby",
            "Craig Tanner",
            "Robin Buday",
            "Dave Cory",
            "Cassie Dixon",
            "Wayan Blue Palmieri",
            "Dylan Suchesk",
            "Steve Bobertz"
        ]
    },
    {
        "title": "After",
        "release_date": "2019-04-11",
        "vote_average": 7.121,
        "editors": [
            "Michelle Harrison"
        ]
    },
    {
        "title": "Parasite",
        "release_date": "2019-05-30",
        "vote_average": 8.505,
        "editors": [
            "Ryu Yeon",
            "Lim Hye-jin",
            "Yang Jin-mo",
            "Kevin Kang",
            "Han Mi-yeon"
        ]
    },
    {
        "title": "John Wick: Chapter 3 - Parabellum",
        "release_date": "2019-05-15",
        "vote_average": 7.447,
        "editors": [
            "Jill Bogdanowicz",
            "John Scott Cook",
            "Halima K. Gilliam",
            "Nick Ellsberg",
            "Evan Schiff"
        ]
    },
    {
        "title": "Fast & Furious Presents: Hobbs & Shaw",
        "release_date": "2019-08-01",
        "vote_average": 6.861,
        "editors": [
            "Christopher Rouse",
            "Travis Dultz",
            "Dave Hussey",
            "Miles Anderson",
            "Jess Jansen",
            "Ian Sullivan",
            "Mark Fitzgerald",
            "Kristin Derella",
            "Jason Wasserman"
        ]
    },
    {
        "title": "Queen of Hearts",
        "release_date": "2019-03-27",
        "vote_average": 6.9,
        "editors": [
            "Rasmus Stensgaard Madsen"
        ]
    },
    {
        "title": "Alita: Battle Angel",
        "release_date": "2019-01-31",
        "vote_average": 7.24,
        "editors": [
            "Stephen E. Rivkin",
            "Ian Silverstein",
            "Justin Yates",
            "Skip Kimball",
            "Tashi Trieu",
            "Hershel Cohen",
            "Jay Mahavier"
        ]
    },
    {
        "title": "Spider-Man: Far From Home",
        "release_date": "2019-06-28",
        "vote_average": 7.4,
        "editors": [
            "Anna Sweeney",
            "Dan Lebental",
            "Leigh Folsom Boyd"
        ]
    },
    {
        "title": "Frozen II",
        "release_date": "2019-11-20",
        "vote_average": 7.256,
        "editors": [
            "Jeff Draheim"
        ]
    },
    {
        "title": "Toy Story 4",
        "release_date": "2019-06-19",
        "vote_average": 7.488,
        "editors": [
            "Axel Geddes"
        ]
    },
    {
        "title": "Ford v Ferrari",
        "release_date": "2019-11-13",
        "vote_average": 8.006,
        "editors": [
            "A.R. Björklund",
            "Michael McCusker",
            "Andrew Buckland",
            "Dirk Westervelt",
            "Skip Kimball",
            "Sandra Grubb",
            "Christopher Rucinski",
            "Tashi Trieu"
        ]
    },
    {
        "title": "Jumanji: The Next Level",
        "release_date": "2019-12-04",
        "vote_average": 6.9,
        "editors": [
            "Steve Edwards"
        ]
    },
    {
        "title": "How to Train Your Dragon: Homecoming",
        "release_date": "2019-12-03",
        "vote_average": 8.1,
        "editors": []
    },
    {
        "title": "Godzilla: King of the Monsters",
        "release_date": "2019-05-29",
        "vote_average": 6.702,
        "editors": [
            "Roger Barton",
            "Richard Pearson",
            "Bob Ducsay"
        ]
    },
    {
        "title": "Knives Out",
        "release_date": "2019-11-27",
        "vote_average": 7.8,
        "editors": [
            "Sam Bollinger",
            "Bob Ducsay"
        ]
    },
    {
        "title": "Anna",
        "release_date": "2019-06-19",
        "vote_average": 6.7,
        "editors": [
            "Julien Rey",
            "Yvan Lucas",
            "Katia Boutin",
            "Clemence Gabrielidis",
            "Katie Jordan",
            "Elodie Ly Tri"
        ]
    }
]


