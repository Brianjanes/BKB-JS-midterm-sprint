const { 
    getMoviesByGenre, 
    getTopRatedMovies, 
    getMovieDetailsById, 
    selectRandomMovieId 
} = require("../../utils/movieUtils");

const { Movies, Genres } = require("../../data");

describe('Movie Utility Functions', () => {
    describe('getMoviesByGenre', () => {
        it('should return the correct number of movies for a given genre', () => {
            const genre = Genres.ACTION;
            const count = 3;
            const result = getMoviesByGenre(genre, count);
            
            expect(result).toHaveLength(count);
            result.forEach(movie => {
                expect(movie.genres).toContain(genre);
            });
        });

        it('should return all movies of a genre if x is larger than available movies', () => {
            const genre = Genres.COMEDY;
            const allComedyMovies = Movies.filter(movie => movie.genres.includes(Genres.COMEDY));
            const result = getMoviesByGenre(genre, 1000);

            expect(result).toHaveLength(allComedyMovies.length);
        });

        it('should return an empty array for a genre with no movies', () => {
            const result = getMoviesByGenre('NONEXISTENT_GENRE', 5);
            expect(result).toHaveLength(0);
        });
    });

    describe('getTopRatedMovies', () => {
        it('should return the specified number of movies in descending rating order', () => {
            const count = 5;
            const result = getTopRatedMovies(count);

            expect(result).toHaveLength(count);
            for (let i = 0; i < result.length - 1; i++) {
                expect(result[i].rating).toBeGreaterThanOrEqual(result[i + 1].rating);
            }
        });

        it('should return all movies if x is larger than total movies', () => {
            const result = getTopRatedMovies(1000);
            expect(result).toHaveLength(Movies.length);
        });

        it('should return movies with correct properties', () => {
            const result = getTopRatedMovies(1)[0];
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('title');
            expect(result).toHaveProperty('rating');
            expect(result).toHaveProperty('genres');
        });
    });

    describe('getMovieDetailsById', () => {
        it('should return correct movie details for valid ID', () => {
            const testMovie = Movies[0];
            const result = getMovieDetailsById(testMovie.id);
            
            expect(result).toEqual(testMovie);
        });

        it('should throw error for non-existent movie ID', () => {
            expect(() => {
                getMovieDetailsById(99999);
            }).toThrow('Movie not found');
        });

        it('should return movie with all required properties', () => {
            const result = getMovieDetailsById(Movies[0].id);
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('title');
            expect(result).toHaveProperty('rating');
            expect(result).toHaveProperty('genres');
        });
    });

    describe('selectRandomMovieId', () => {
        it('should return a valid movie ID', () => {
            const result = selectRandomMovieId();
            const movieIds = Movies.map(movie => movie.id);
            expect(movieIds).toContain(result);
        });
    });
});