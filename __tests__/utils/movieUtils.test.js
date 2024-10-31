const {
    getMoviesByGenre,
    getTopRatedMovies,
    getMovieDetailsById,
    selectRandomMovieId
  } = require('../../utils/movieUtils');
  
  const { Movies, Genres } = require('../../utils/data');
  
  describe('Movie utils Tests', () => {
    describe('getMoviesByGenre', () => {
      test('returns correct number of movies for a valid genre', () => {
        const result = getMoviesByGenre(Genres.ACTION);
        const actionMovies = Movies.filter(movie => movie.genre === Genres.ACTION);
        expect(result.all.length).toBe(actionMovies.length);
      });
  
      test('returns empty arrays for a genre with no movies', () => {
        // Assuming there's a genre with no movies
        const result = getMoviesByGenre('NON_EXISTENT_GENRE');
        expect(result.all).toHaveLength(0);
        expect(result.suggestions).toHaveLength(0);
      });
  
      test('suggestions array contains at most 3 movies', () => {
        const result = getMoviesByGenre(Genres.ACTION);
        expect(result.suggestions.length).toBeLessThanOrEqual(3);
      });
  
      test('suggestions are unique', () => {
        const result = getMoviesByGenre(Genres.ACTION);
        const uniqueSuggestions = new Set(result.suggestions.map(movie => movie.id));
        expect(uniqueSuggestions.size).toBe(result.suggestions.length);
      });
    });
  
    describe('getTopRatedMovies', () => {
      test('returns correct number of movies', () => {
        const count = 5;
        const result = getTopRatedMovies(count);
        expect(result).toHaveLength(count);
      });
  
      test('movies are properly ordered by rating', () => {
        const result = getTopRatedMovies(5);
        for (let i = 0; i < result.length - 1; i++) {
          expect(result[i].rating).toBeGreaterThanOrEqual(result[i + 1].rating);
        }
      });
  
      test('returns all movies if requested count is greater than total movies', () => {
        const result = getTopRatedMovies(Movies.length + 1);
        expect(result).toHaveLength(Movies.length);
      });
    });
  
    describe('getMovieDetailsById', () => {
      test('returns correct movie for valid ID', () => {
        const testMovie = Movies[0];
        const result = getMovieDetailsById(testMovie.id);
        expect(result).toEqual(testMovie);
      });
  
      test('throws error for invalid ID', () => {
        expect(() => {
          getMovieDetailsById(-1);
        }).toThrow('Movie not found');
      });
    });
  
    describe('selectRandomMovieId', () => {
      test('returns a valid movie ID', () => {
        const result = selectRandomMovieId();
        const validIds = Movies.map(movie => movie.id);
        expect(validIds).toContain(result);
      });
  
      test('returns different IDs on multiple calls', () => {
        // Note: This test might occasionally fail due to random chance. If it fails more than once, buy a lottery ticket tonight!
        const results = new Set();
        for (let i = 0; i < 10; i++) {
          results.add(selectRandomMovieId());
        }
        // Expect at least 2 different IDs in 10 calls
        expect(results.size).toBeGreaterThan(1);
      });
    });
  });