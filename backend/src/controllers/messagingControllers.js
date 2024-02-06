const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const messagings = await tables.messaging.readAll();
    if (messagings.length) {
      res.json(messagings);
    } else {
      res.status(404).json({
        message: "aucune data",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const read = async (req, res, next) => {
  try {
    const messaging = await tables.messaging.readById(req.params.id);
    if (messaging === null) {
      res.status(404).json({
        message: "id non valide",
      });
    } else {
      res.json(messaging);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { title, body } = req.body;
  const { sub } = req.auth;
  try {
    const result = await tables.messaging.create(title, body, sub);
    res.status(201).json({
      id: result.insertId,
      message: "Nouveau message bien créé",
    });
  } catch (err) {
    next(err);
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tables.messaging.delete(id);
    if (result) {
      res.json({
        message: `message supprimée à l'id: ${id}`,
      });
    } else {
      res.status(404).json({
        message: "id non valide",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = { browse, read, add, remove };
