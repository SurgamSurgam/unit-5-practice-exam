DROP DATABASE IF EXISTS movies_final;
CREATE DATABASE movies_final;

\c movies_final;


CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(360) NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL UNIQUE,
  genre_id INT REFERENCES genres(id) ON DELETE CASCADE,
  img_url TEXT
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  stars numeric CHECK(stars >= 1 AND stars <= 5) NOT NULL,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE
);
