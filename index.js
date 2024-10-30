const express = require("express");
const path = require("path");
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
  getRandomMovies,
  getUpcomingMovies,
} = require("./utils/movieUtils");
const { Movies, Genres } = require("./utils/data");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

//Add remaining routes here

// GET ROUTES
app.get("/", (request, response) => {
  try {
    const randomMovies = getRandomMovies(9);
    response.render("index", {
      movies: randomMovies,
      title: "Movie Gallery",
      Genres: Genres,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).render("error", {
      message: "Internal server error",
      title: "Error",
    });
  }
});

// Single movie route
app.get("/movie/:id", (request, response) => {
  const movieId = parseInt(request.params.id, 10);

  try {
    const selectedMovie = getMovieDetailsById(movieId);
    const suggestedMovies = getMoviesByGenre(selectedMovie.genre).suggestions;
    response.render("movie", {
      movie: selectedMovie,
      title: selectedMovie.title,
      suggestions: suggestedMovies,
      Genres: Genres,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(404).render("error", {
      message: "Movie not found",
      title: "Error - Movie Not Found",
    });
  }
});

// Random movie route
app.get("/random", (request, response) => {
  try {
    const randomMovieID = selectRandomMovieId();
    const movie = getMovieDetailsById(randomMovieID);
    response.render("random", {
      // Removed return statement for consistency
      movie: movie,
      title: "Random Movie - " + movie.title,
      Genres: Genres,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).render("error", {
      message: "Internal server error",
      title: "Error",
    });
  }
});

// Top rated movies route
app.get("/top-rated-movies", (request, response) => {
  try {
    const topMovies = getTopRatedMovies(5);
    response.render("top-rated-movies", {
      movies: topMovies,
      title: "Top Rated Movies",
      Genres: Genres,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).render("error", {
      message: "Internal server error",
      title: "Error",
    });
  }
});

// Genre route
app.get("/genres/:genre", (request, response) => {
  try {
    const genre = request.params.genre;
    if (!Object.values(Genres).includes(genre)) {
      return response.status(404).render("error", {
        message: "Genre not found",
        title: "Genre Not Found",
        Genres: Genres,
      });
    }
    const { all: genreMovies } = getMoviesByGenre(genre);
    response.render("genre", {
      genre,
      movies: genreMovies,
      title: `${genre} Movies`,
      Genres: Genres,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).render("error", {
      message: "Internal server error",
      title: "Error",
    });
  }
});

// up & coming route
app.get("/upcoming", (request, response) => {
  try {
    const upcomingMovies = getUpcomingMovies();
    response.render("upcoming", {
      movies: upcomingMovies,
      title: "Upcoming Movies",
      Genres: Genres,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).render("error", {
      message: "Internal server error",
      title: "Error",
    });
  }
});

// POST ROUTES

// PUT ROUTES

// DELETE ROUTES

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
