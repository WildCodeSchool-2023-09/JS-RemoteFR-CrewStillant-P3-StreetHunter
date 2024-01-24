const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const roles = await tables.role.readAll();
    if (roles.length) {
      res.json(roles);
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
    const role = await tables.role.readById(req.params.id);
    if (role == null) {
      res.status(404).json({
        message: "id non valide",
      });
    } else {
      res.json(role);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const { role_name: roleName } = req.body;
  try {
    const result = await tables.role.create(roleName);
    res.status(201).json({
      id: result.inserId,
      message: "Role bien créé",
    });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const { role_name: roleName } = req.body;
  try {
    const result = await tables.role.update(roleName, id);
    if (result == null) {
      res.status(404).json({
        message: "données non valides",
      });
    } else {
      res.status(200).json({
        message: "role bien modifié",
      });
    }
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tables.role.destroy(id);
    if (result) {
      res.json({
        message: `role supprimé à l'id: ${id}`,
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
