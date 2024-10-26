const express = require("express");
const path = require("path");
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
  getRandomMovies,
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
  response.render("index", { movies: randomMovies });
});

app.get("/movie/:id", (request, response) => {
  const movieId = parseInt(request.params.id, 10);

  try {
    const selectedMovie = getMovieDetailsById(movieId);
    console.log("Selected Movie:", selectedMovie);
    response.render("movie", { movie: selectedMovie });
  } catch (error) {
    console.error("Error:", error);
    response.status(404).json({
      message: "Movie not found",
    });
  }
});

// route to get a random movie
app.get("/random", (request, response) => {
  try {
    const randomMovieID = selectRandomMovieId();
    const movie = getMovieDetailsById(randomMovieID);
    console.log("Random Movie:", movie);
    return response.render("random", { movie: movie });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({
      message: "Internal server error",
    });
  }
});

// route to get top-rated movies
app.get("/top-rated-movies", (request, response) => {
  const topMovies = getTopRatedMovies(5);
  response.render("top-rated-movies", { movies: topMovies });
});

// route to get all movies from a specific genre, and also return 3 random movies from that genre
app.get("/genre/:genre", (request, response) => {
  try {
    const genre = request.params.genre;

    // Validate that the genre exists
    if (!Object.values(Genres).includes(genre)) {
      return response.status(404).render("error", {
        message: "Genre not found",
      });
    }

    const { all: genreMovies, suggestions: randomSuggestions } =
      getMoviesByGenre(genre);

    response.render("genre", {
      genre,
      movies: genreMovies,
      suggestions: randomSuggestions,
    });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).render("error", {
      message: "Internal server error",
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
