const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const categories = await tables.category.readAll();
    if (categories.length) {
      res.json(categories);
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
    const category = await tables.category.readById(req.params.id);
    if (category === null) {
      res.status(404).json({
        message: "id non valide",
      });
    } else {
      res.json(category);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { cat_name: catName } = req.body;
  try {
    const result = await tables.category.create(catName);
    res.status(201).json({
      id: result.insertId,
      message: "Nouvelle catégorie bien crée",
    });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { cat_name: catName } = req.body;
  const { id } = req.params;
  try {
    const result = await tables.category.update(catName, id);
    if (result == null) {
      res.status(404).send("données incorrectes");
    } else {
      res.status(200).json({
        message: "Votre catégorie a bien été modifiée",
      });
    }
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tables.category.delete(id);
    if (result) {
      res.json({
        message: `catégory supprimée à l'id = ${id}`,
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
module.exports = { browse, read, add, edit, remove };
