const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');
const MovieModel = require('../models/Movie.model');

router.get('/celebrities', async (req, res) => {
  try{
    const celebritiesFromDB = await Celebrity.find();
    res.render('celebrities/index', {celebritiesFromDB});

  } catch(e) {
    res.render('error');
    console.log(`an error ocured ${e}`)
  }
});


router.get('/celebrities/new', async (req, res) => {
  let allMovies = await MovieModel.find();
  res.render('celebrities/new', {allMovies})
});

router.get('/celebrities/:id', async (req, res) => {
  const celebID = req.params.id;
  const celeb = await Celebrity.findById(celebID)
  res.render('celebrities/show', { celeb })
});

router.post('/celebrities/new', async ( req, res) => {
  const {name, occupation, catchPhrase, movie} = req.body
  await Celebrity.create({
    name,
    occupation,
    catchPhrase,
    movie
  });
  res.redirect('/celebrities')
});

// router.get('/celebraties/:id/edit', (req, res) => {
//   const celebID = req.params.id;
//   const book = await Book.findById
// })

router.post('/celebrities/:id/delete', async (req, res) => {
  const celebID = req.params.id;
  await Celebrity.findByIdAndDelete(celebID);
  res.redirect('/celebrities')
});


module.exports = router
