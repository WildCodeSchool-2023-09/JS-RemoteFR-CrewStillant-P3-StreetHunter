const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const artworks = await tables.artwork.readAll();
    /**
     * @description map method on artwork table for adding path for path_pic line
     */
    const formatedData = await artworks.map((picture) => ({
      ...picture,
      path_pic: `${req.protocol}://${req.get("host")}/public/images/${
        picture.path_pic
      }`,
    }));
    res.json(formatedData);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
const browseValidated = async (req, res) => {
  try {
    const artworks = await tables.artwork.readAllValidated();
    const formatedData = await artworks.map((picture) => ({
      ...picture,
      path_pic: `${req.protocol}://${req.get("host")}/public/images/${
        picture.path_pic
      }`,
    }));
    res.json(formatedData);
  } catch (e) {
    console.error(e);
  }
};

const browseNotValidated = async (req, res, next) => {
  try {
    const artworks = await tables.artwork.readAllNotValidated();
    const formatedData = await artworks.map((picture) => ({
      ...picture,
      path_pic: `${req.protocol}://${req.get("host")}/public/images/${
        picture.path_pic
      }`,
    }));
    res.json(formatedData);
  } catch (e) {
    console.error(e);
    next(e);
  }
};
const read = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  try {
    const artwork = await tables.artwork.readById(id);
    const formatedData = await artwork.map((picture) => ({
      ...picture,
      path_pic: `${req.protocol}://${req.get("host")}/public/images/${
        picture.path_pic
      }`,
    }));
    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.status(200);
    }
    res.json(formatedData);
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
    category_id: catID,
    artist_id: artID,
    user_id: userID,
  } = req.body;
  const pathPic = req.file.filename;
  try {
    const insertId = await tables.artwork.create(
      pathPic,
      title,
      longitude,
      latitude,
      catID,
      artID,
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

const validateArtwork = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await tables.artwork.validateArtwork(id);
    if (result.affectedRows === 0) {
      res
        .status(404)
        .send(`Artwork with id: ${id} not found or already validated.`);
    } else {
      res.status(200).send(`Artwork with id: ${id} validated successfully!`);
    }
  } catch (e) {
    console.error(e);
    res.status(500).send("Error validating artwork");
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  remove,
  browseValidated,
  validateArtwork,
  browseNotValidated,
};
