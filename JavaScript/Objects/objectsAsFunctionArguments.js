const movie1 = {
  title: "The Shawshank Redemption",
  director: "Frank Darabont",
  genre: "Drama",
  releaseYear: 1994,
  imdbRating: 9.3,
};
const movie2 = {
  title: "The Godfather",
  director: "Francis Ford Coppola",
  genre: "Crime",
  releaseYear: 1972,
  imdbRating: 9.2,
};
const movie3 = {
  title: "Inception",
  director: "Christopher Nolan",
  genre: "Sci-Fi",
  releaseYear: 2010,
  imdbRating: 8.8,
};

// Example of passing an object to a function
const getMovieSummary = function (movie) {
  return `${movie.title} (${movie.releaseYear}) - Directed by ${movie.director}. Genre ${movie.genre}. IMDb Rating: ${movie.imdbRating}`;
};

const resultOne = getMovieSummary(movie1);
console.log("resultOne:", resultOne);
const resultTwo = getMovieSummary(movie2);
console.log("resultTwo:", resultTwo);
const resultThree = getMovieSummary(movie3);
console.log("resultThree:", resultThree);

// Example of passing an object to a function and returning an object from the function
const getMovieSummaryInObject = function (movie) {
  return {
    title: movie.title,
    director: movie.director,
    summary: `${movie.title} (${movie.releaseYear}) - Directed by ${movie.director}. Genre ${movie.genre}. IMDb Rating: ${movie.imdbRating}`,
  };
};

const movieSummaryResult = getMovieSummaryInObject(movie1);
console.log("movieSummaryResult: ", movieSummaryResult);

const movieSummaryResult2 = getMovieSummaryInObject(movie2);
console.log("movieSummaryResult2: ", movieSummaryResult2);

const movieSummaryResult3 = getMovieSummaryInObject(movie3);
console.log("movieSummaryResult3: ", movieSummaryResult3);
