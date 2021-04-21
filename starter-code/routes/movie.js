const express = require ('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


router.get('/movies/index', async (req, res) => {
  const celebritiesFromDB = await Movie.find();
    res.render('movies/index', {celebritiesFromDB});
});

module.exports = router;
