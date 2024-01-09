const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const artists = await tables.artist.readAll();
    if (artists.length) {
      res.json(artists);
    } else {
      res.status(404).json({
        message: "no data",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

const read = async (req, res, next) => {
  try {
    const artist = await tables.artist.readById(req.params.id);
    if (artist == null) {
      res.status(404).json({
        message: "invalid id",
      });
    } else {
      res.json(artist);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { artist_name: artistName } = req.body;
  try {
    const result = await tables.artist.create(artistName);
    res.status(201).json({
      id: result.inserId,
      message: "Artiste bien créé",
    });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const { artist_name: artistName } = req.body;
  try {
    const result = await tables.artist.update(artistName, id);
    if (result == null) {
      res.status(404).json({
        message: "données non valides",
      });
    } else {
      res.status(200).json({
        message: "artiste bien modifié",
      });
    }
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tables.artist.destroy(id);
    if (result) {
      res.json({
        message: `artiste supprimé à l'id: ${id}`,
      });
    } else {
      res.status(404).json({
        message: "informations non valides",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = { browse, read, add, edit, remove };
