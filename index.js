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

app.get("/top-rated", (request, response) => {
  const topRatedMovies = getTopRatedMovies(5);
  console.log("Top Rated Movies:", topRatedMovies);
  response.render("top-rated", { movies: topRatedMovies });
});

// POST ROUTES

// PUT ROUTES

// DELETE ROUTES

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
