const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    if (users.length) {
      res.json(users);
    } else {
      res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await tables.user.readById(id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const { id } = req.params;
  const {
    username,
    lastname,
    firsnname,
    email,
    password,
    score,
    city,
    postal_code: postalCode,
    role_id: roleId,
  } = req.body;
  try {
    const result = await tables.user.update(
      username,
      lastname,
      firsnname,
      email,
      password,
      score,
      city,
      postalCode,
      roleId,
      id
    );
    if (result == null) {
      res.status(404).json({ message: "L'utilisateur n'existe pas" });
    } else {
      res.status(200).json({ message: "l'utilisateur a bien été modifié " });
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const {
    username,
    lastname,
    firsnname,
    email,
    password,
    score,
    created_at: createdAt,
    city,
    postal_code: postalCode,
    role_id: roleId,
  } = req.body;
  try {
    const newUser = await tables.user.create(
      username,
      lastname,
      firsnname,
      email,
      password,
      score,
      createdAt,
      city,
      postalCode,
      roleId
    );
    res
      .status(201)
      .json({ id: newUser.insertId, message: "L'utilisateur a bien été créé" });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tables.user.destroy(id);
    if (result) {
      res.json({ message: "L'utilisateur a bien été supprimé" });
    } else {
      res.status(404).json({ message: "L'utilisateur n'existe pas" });
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { browse, read, edit, add, remove };
