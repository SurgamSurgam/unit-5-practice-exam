const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/movies_final");

const faker = require("faker");
const allGenres = require("./movie-genres.json");
const allMovies = require("./IMDB-top-100-movies");

// GENRES
let genres = [];

for (let i = 0; i < allGenres.length; i++) {
  let name = allGenres[i];

  genres.push(`('${name}')`);
}

genres = genres.join(", ");

// console.log(genres)

// MOVIES
let movies = [];

for (let i = 0; i < allMovies.length; i++) {
  let title = allMovies[i].title;
  let genre_id = Math.ceil(Math.random() * 40);
  let img_url = faker.image.avatar();

  movies.push(`('${title}', ${genre_id}, '${img_url}')`);
}

movies = movies.join(", ");

console.log(movies)

// RATINGS
let ratings = [];

for (let i = 0; i < 50; i++) {
  let stars = Math.ceil(Math.random() * 5);
  let movie_id = Math.ceil(Math.random() * 100);

  ratings.push(`(${stars}, ${movie_id})`);
}

ratings = ratings.join(", ");

// console.log(ratings)

// COMMENTS
let comments = [];

for (let i = 0; i < 50; i++) {
  let body = faker.lorem.words();
  let movie_id = Math.ceil(Math.random() * 100);

  comments.push(`('${body}', ${movie_id})`);
}

comments = comments.join(", ");

// console.log(comments);

// INSERTING INTO DATABASE
const populateData = async () => {
  try {
    await db.none('INSERT INTO genres(name) VALUES ' + genres);
    await db.none('INSERT INTO movies(title, genre_id, img_url) VALUES' + movies);
    await db.none('INSERT INTO ratings(stars, movie_id) VALUES' + ratings);
    await db.none('INSERT INTO comments(body, movie_id) VALUES' + comments);
  } catch (error) {
    console.error("Error from ASYNC/AWAIT:", error);
  }
};

populateData();

//
// const populateData = async () => {
//   try {
//     await db.none('INSERT INTO genres(name) VALUES ' + genres);
//     await db.none('INSERT INTO movies(title, genre_id, img_url) VALUES ${movies};',{movies});
//     await db.none('INSERT INTO ratings(stars, movie_id) VALUES ${ratings};', {ratings});
//     await db.none('INSERT INTO comments(body, movie_id) VALUES ${comments};', {comments});
//   } catch (error) {
//     console.error("Error from ASYNC/AWAIT:", error);
//   }
// };
//
// populateData();
