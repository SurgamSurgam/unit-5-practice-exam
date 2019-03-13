const express = require('express');
const router = express.Router();

const { getAllMoviesWithAvgRating, getSingleMovieAllInfo, allMoviesForGenre } = require('../db/queries/moviesQueries.js')

/* GET users listing. */
router.get('/', getAllMoviesWithAvgRating);
router.get('/:movie_id', getSingleMovieAllInfo);
router.get('/genre/:genre_name', allMoviesForGenre);

module.exports = router;
