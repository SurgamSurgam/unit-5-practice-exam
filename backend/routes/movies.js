const express = require('express');
const router = express.Router();

const { getAllMoviesWithAvgRating, getSingleMovieAllInfo } = require('../db/queries/moviesQueries.js')

/* GET users listing. */
router.get('/', getAllMoviesWithAvgRating);
router.get('/:movie_id', getSingleMovieAllInfo);

module.exports = router;
