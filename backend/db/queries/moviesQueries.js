const db = require('../index.js');

const getAllMoviesWithAvgRating = (req, res, next) => {
  db.any('SELECT title, ROUND(AVG(stars),1) AS rating_average FROM movies JOIN ratings ON ratings.movie_id = movies.id GROUP BY movies.title')
  .then((movies)=> {
    res.status(200).json({
      status: 'succes',
      message: 'Got all movies with an average of all the ratings for each movie',
      body: movies
    })
  })
  .catch(error => {
    next(error);
  })
}

module.exports = { getAllMoviesWithAvgRating };
