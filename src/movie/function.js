const Movie = require("./table");

async function createMovie(movieObject) {
  try {
    const newMovie = await Movie.create(movieObject);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
}

async function readMovie(movieObject) {
  try {
  } catch (error) {
    console.log(error);
  }
}

async function updateMovie(movieObject) {
  try {
  } catch (error) {
    console.log(error);
  }
}

async function deleteMovie(movieObject) {
  try {
  } catch (error) {
    console.log(error);
  }
}

exports.createMovie = createMovie;
