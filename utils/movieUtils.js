const { Movies, Genres } = require("./data");

/**
 * Get all movies by genre and random suggestions
 * @param {Genres} genre - The genre of the movies
 * @returns {{all: Array.<Movies>, suggestions: Array.<Movies>}} - Object containing all movies and random suggestions of the genre
 */
function getMoviesByGenre(genre) {
  // Get all movies of the specified genre
  const allMoviesOfGenre = Movies.filter((movie) => movie.genre === genre);

  // Helper function to get random unique items using Fisher-Yates shuffle
  function getRandomUniqueItems(array, count) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  // Get 3 random suggestions (or less if there aren't enough movies)
  const count = Math.min(3, allMoviesOfGenre.length);
  const suggestions = getRandomUniqueItems(allMoviesOfGenre, count);

  return {
    all: allMoviesOfGenre,
    suggestions: suggestions,
  };
}

/**
 * Get the `x` top rated movies, ordered by rating
 * @param {number} x - The number of top-rated movies to retrieve
 * @returns {Array.<Movies>} - An array of top-rated movies
 */
function getTopRatedMovies(x) {
  // Implementation here
  const topRatedMovies = Movies.sort((a, b) => b.rating - a.rating).slice(0, x);
  return topRatedMovies;
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
  const movie = Movies.find((movie) => movie.id === id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie;
}

/**
 * Get multiple random movies
 * @param {number} count - The number of random movies to retrieve
 * @returns {Array.<Movies>} - An array of random movies
 */
function getRandomMovies(count) {
  const shuffled = [...Movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
  const randomIndex = Math.floor(Math.random() * Movies.length);
  return Movies[randomIndex].id;
}

/**
 * Get all upcoming movies
 * @returns {Array.<Movies>} - An array of upcoming movies with release dates in the future
 */
function getUpcomingMovies() {
  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Filter movies where releaseYear is greater than current year
  const upcomingMovies = Movies.filter((movie) => {
    // If the movie has no rating, it's considered unreleased/upcoming
    if (movie.rating === null) return true;

    // Check if release year is in the future
    return movie.releaseYear > currentYear;
  });

  return upcomingMovies;
}

// Export the functions to be used in other modules
module.exports = {
  getMoviesByGenre,
  getTopRatedMovies,
  getMovieDetailsById,
  selectRandomMovieId,
  getRandomMovies,
  getUpcomingMovies,
};
