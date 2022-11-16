const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  createMovie,
  readMovie,
  updateMovie,
  deleteMovie,
} = require("./movie/function");

async function app(yargsObject) {
  await sequelize.sync();
  if (yargsObject.create) {
    // create code goes here
    await createMovie({
      title: yargsObject.title,
      actor: yargsObject.actor,
      director: yargsObject.director,
    });
  } else if (yargsObject.read) {
    await readMovie();
    // read code goes here
  } else if (yargsObject.update) {
    // update code goes here
    await updateMovie(yargsObject.updatedTitle, yargsObject.title);
  } else if (yargsObject.delete) {
    await deleteMovie(yargsObject.title);
    console.log("DELETED");
    // delete code goes here
  } else {
    console.log("Command not recognised");
  }
}

app(yargs.argv);

// node src/app.js --create --title "M1" --actor "A1" --director "D1"
