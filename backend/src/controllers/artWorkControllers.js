// Import access to database tables
const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const artworks = await tables.artwork.readAll();

    res.json(artworks);
  } catch (e) {
    console.error(e);
  }
};

const read = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    // Fetch a specific artwork from the database based on the provided ID
    const artwork = await tables.artwork.readById(id);

    // If the artwork is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the artwork in JSON format
    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.status(200);
    }
    res.json(artwork);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res) => {
  const { id } = parseInt(req.params, 10);
  const { title, adress, validated, category_id: categorieID } = req.body;

  try {
    const updatedArtwork = await tables.artwork.update(
      id,
      title,
      adress,
      validated,
      categorieID
    );

    if (updatedArtwork === null) {
      res.status(404);
    } else {
      res.status(200).send(`Artwork with id: ${id} updated succesfully !`);
    }
  } catch (e) {
    // Pass any errors to the error-handling middleware
    console.error(e);
  }
};

const add = async (req, res) => {
  const { title, adress, validated, categories_id: categorieID } = req.body;

  try {
    const insertId = await tables.artwork.create(
      title,
      adress,
      validated,
      categorieID
    );

    res.status(201).json({ insertId });
  } catch (e) {
    console.error(e);
  }
};

// The D of BREAD - Destroy (Delete) operation
const remove = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    // Check if the artwork with the given ID exists
    const deletedArtwork = await tables.artwork.delete(id);

    // If the artwork is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with a success message
    if (deletedArtwork === null) {
      res.status(404).send(`Artwork with id: ${id} not found`);
    } else {
      res.status(200).send(`Artwork with id: ${id} deleted successfully`);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  remove,
};
