const numberOfFilms = prompt("velue muvi?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("last muve?", ""),
  b = prompt("starts?", ""),
  c = prompt("last film?", ""),
  d = prompt("starts?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
