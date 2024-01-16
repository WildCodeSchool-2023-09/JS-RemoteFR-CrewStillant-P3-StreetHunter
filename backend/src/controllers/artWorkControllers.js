const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const artworks = await tables.artwork.readAll();

    res.json(artworks);
  } catch (e) {
    console.error(e);
  }
};
const browseValidated = async (req, res) => {
  try {
    const artworks = await tables.artwork.readAllValidated();

    res.json(artworks);
  } catch (e) {
    console.error(e);
  }
};

const read = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    const artwork = await tables.artwork.readById(id);

    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.status(200);
    }
    res.json(artwork);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res) => {
  const {
    path_pic: pathPic,
    title,
    longitude,
    latitude,
    validated,
    category_id: catID,
    artist_id: artistID,
    user_id: userID,
  } = req.body;
  const { id } = req.params;

  try {
    const updatedArtwork = await tables.artwork.update(
      id,
      pathPic,
      title,
      longitude,
      latitude,
      validated,
      catID,
      artistID,
      userID
    );

    if (updatedArtwork === null) {
      res.status(404);
    } else {
      res.status(200).send(`Artwork with id: ${id} updated succesfully !`);
    }
  } catch (e) {
    console.error(e);
  }
};

const add = async (req, res) => {
  const {
    title,
    longitude,
    latitude,
    validated,
    category_id: catID,
    artist_id: artistID,
    user_id: userID,
  } = req.body;
  try {
    const insertId = await tables.artwork.create(
      title,
      longitude,
      latitude,
      validated,
      catID,
      artistID,
      userID
    );

    res.status(201).json({ insertId });
  } catch (e) {
    console.error(e);
  }
};

const remove = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    const deletedArtwork = await tables.artwork.delete(id);

    if (deletedArtwork === null) {
      res.status(404).send(`Artwork with id: ${id} not found`);
    } else {
      res.status(200).send(`Artwork with id: ${id} successfully deleted`);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  remove,
  browseValidated,
};
