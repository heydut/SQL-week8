const Movie = require("./table");

exports.createMovie = async (movieObject) => {
  try {
    const newMovie = await Movie.create(movieObject);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.readMovie = async () => {
  try {
    const read = await Movie.findAll();
    console.table(read);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (updatedTitle, title) => {
  try {
    await Movie.update(
      { title: updatedTitle },
      {
        where: { title: title },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (title) => {
  try {
    await Movie.destroy({
      where: { title: title },
    });
  } catch (error) {
    console.log(error);
  }
};

// node src/app.js --create --title "TEST" --actor "TEST" --director "TEST"
//  node src/app.js --update --title "M6" --actor "TEST"
// node src/app.js --delete --title "M6"
