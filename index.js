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
  const randomMovies = getRandomMovies(9);
  response.render("index", {
    movies: randomMovies,
    title: "Movie Gallery",
  });
});

// Single movie route
app.get("/movie/:id", (request, response) => {
  const movieId = parseInt(request.params.id, 10);
  try {
    const selectedMovie = getMovieDetailsById(movieId);
    response.render("movie", {
      movie: selectedMovie,
      title: selectedMovie.title,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(404).json({
      message: "Movie not found",
    });
  }
});

// Random movie route
app.get("/random", (request, response) => {
  try {
    const randomMovieID = selectRandomMovieId();
    const movie = getMovieDetailsById(randomMovieID);
    return response.render("random", {
      movie: movie,
      title: "Random Movie - " + movie.title,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({
      message: "Internal server error",
    });
  }
});

// Top rated movies route
app.get("/top-rated-movies", (request, response) => {
  const topMovies = getTopRatedMovies(5);
  response.render("top-rated-movies", {
    movies: topMovies,
    title: "Top Rated Movies",
  });
});

// Genre route
app.get("/genres/:genre", (request, response) => {
  try {
    const genre = request.params.genre;
    if (!Object.values(Genres).includes(genre)) {
      return response.status(404).render("error", {
        message: "Genre not found",
        title: "Genre Not Found",
      });
    }
    const { all: genreMovies, suggestions: randomSuggestions } =
      getMoviesByGenre(genre);
    response.render("genre", {
      genre,
      movies: genreMovies,
      suggestions: randomSuggestions,
      title: `${genre} Movies`,
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
  const upcomingMovies = getUpcomingMovies();
  response.render("upcoming", {
    movies: upcomingMovies,
    title: "Upcoming Movies",
  });
});

// POST ROUTES

// PUT ROUTES

// DELETE ROUTES

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
