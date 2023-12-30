const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await tables.user.read(id);
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
  const userId = req.params.id;

  try {
    if (!req.body) {
      return res.status(400).json({
        message: "ce champ ne doit pas être vide",
      });
    }

    const {
      username,
      lastname,
      firstname,
      email,
      password,
      score,
      created_at: createdAt,
      city,
      postal_code: postalCode,
      role_id: roleId,
    } = req.body;

    // Edit project information directly using projectManager
    const affectedRows = await tables.user.update(userId, {
      username,
      lastname,
      firstname,
      email,
      password,
      score,
      createdAt,
      city,
      postalCode,
      roleId,
    });

    if (affectedRows === 0) {
      res
        .status(500)
        .json({ message: "L'utilisateur n'a pas pu être modifié" });
    }

    // Fetch and return the updated project
    const editedUser = await tables.user.read(userId);
    return res.json({
      message: "L'utilisateur a bien été modifié",
      user: editedUser,
    });
  } catch (err) {
    next(err);
  }

  // Add a return statement at the end of the function
  return res
    .status(500)
    .json({ message: "L'utilisateur n'a pas pu être modifié" });
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const user = req.body;
  try {
    const newUser = await tables.user.create(user);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.user.delete(req.params.id);
    res.sendStatus(204);
    // Pass any errors to the error-handling middleware
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, edit, add, destroy };
