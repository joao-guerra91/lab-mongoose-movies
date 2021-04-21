const mongoose = require("mongoose");
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const DB_NAME = 'movies-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// const celebrity = [
//   {
//     name: 'Tony Montana',
//     occupation: 'Drug Dealer',
//     catchPhrase: 'Say Hello to my little friend'
//   },
//   {
//     name: 'The Terminator',
//     occupation: 'Robot',
//     catchPhrase: 'Hasta la vista, baby'
//   },
//   {
//     name: 'Darth Vader',
//     occupation: 'Dark Lord of the sith',
//     catchPhrase: 'Luke I am your father'
//   },
// ];




// Celebrity.create(celebrity)
// .then(celebritiesFromDB => {
//   console.log(`Created ${celebritiesFromDB.length} celebrities`);
//   mongoose.connection.close();
// })
// .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));


const movies = [
  {
    title: 'Scar Face',
    genre: 'Drama',
    plot: 'Cuban guy gets mental'
  },
  {
    title: 'The Terminator',
    genre: 'SciFi',
    plot: 'A robot saves the world'
  },
  {
    title: 'Star Wars',
    genre: 'SciFi',
    plot: 'The galaxy is saved by an anoying noob'
  },
]


Movie.create(movies)
.then(celebritiesFromDB => {
  console.log(`Created ${celebritiesFromDB.length} celebrities`);
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));