const express = require('express');
const router = express.Router();

const { getAllMoviesWithAvgRating } = require('../db/queries/moviesQueries.js')

/* GET users listing. */
router.get('/', getAllMoviesWithAvgRating);

module.exports = router;
