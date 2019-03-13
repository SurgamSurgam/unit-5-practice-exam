const db = require('../index.js');
const {validate}  = require('../../validate.js');

const getAllMoviesWithAvgRating = (req, res, next) => {
  db.any('SELECT title, ROUND(AVG(stars),1) AS rating_average FROM movies FULL JOIN ratings ON ratings.movie_id = movies.id GROUP BY movies.title')
  .then((movies)=> {
    res.status(200).json({
      status: 'succes',
      message: 'Got all movies with an average of all the ratings for each movie  including the ones not yet rated',
      body: movies
    })
  })
  .catch(error => {
    next(error);
  })
}

const getSingleMovieAllInfo = (req, res, next) => {
  db.one('SELECT movies.id, title, name, ROUND(AVG(ratings.stars),1) AS average_rating, body, img_url  FROM movies LEFT OUTER JOIN ratings ON ratings.movie_id = movies.id LEFT OUTER JOIN genres ON genres.id = movies.genre_id LEFT OUTER JOIN comments ON comments.movie_id=movies.id WHERE movies.id=$1 GROUP BY movies.id, ratings.id, genres.id, comments.id LIMIT 1', [+req.params.movie_id])
  .then((movie)=> {
    res.status(200).json({
      status: 'succes',
      message: 'Got all information and comments for a specific movie',
      body: movie
    })
  })
  .catch(error => {
    next(error);
  })
}
const allMoviesForGenre = (req, res, next) => {
  if (!validate(req.params, Object.keys(req.params)[0] , typeof req.params.genre_name)) {

          res.status(400)
          res.send({
              "msg": "some required values are missing",
          })
          // res.status(400).json({
          //     msg: "some required values are missing",
          // })
      }

  let query = req.params.genre_name[0].toUpperCase().concat(req.params.genre_name.slice(1))
  console.log('PARAMS',query);
  db.any('SELECT movies.id, title, name, ROUND(AVG(ratings.stars),1) AS average_rating, body, img_url  FROM movies LEFT OUTER JOIN ratings ON ratings.movie_id = movies.id LEFT OUTER JOIN genres ON genres.id = movies.genre_id LEFT OUTER JOIN comments ON comments.movie_id=movies.id WHERE genres.name=$1 GROUP BY movies.id, ratings.id, genres.id, comments.id', [query])
  .then((movies)=> {
    res.status(200).json({
      status: 'succes',
      message: 'Got all the movies that have a certain genre',
      body: movies
    })
  })
  .catch(error => {
    next(error);
  })
}

module.exports = { getAllMoviesWithAvgRating, getSingleMovieAllInfo, allMoviesForGenre };
