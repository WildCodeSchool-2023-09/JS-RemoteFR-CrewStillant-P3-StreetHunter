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
  const {
    username,
    lastname,
    firstname,
    email,
    city,
    postal_code: postalCode,
  } = req.body;
  const id = parseInt(req.params.id, 10);

  try {
    const result = await tables.user.update(
      username,
      lastname,
      firstname,
      email,
      city,
      postalCode,
      id
    );
    if (result === 0) {
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
  const { username, email } = req.body;
  const password = req.body.hashedpwd;
  try {
    const newUser = await tables.user.create(username, email, password);
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

const addScore = async (req, res, next) => {
  const { id } = req.params; // ID user
  const { score } = req.body; // add points
  try {
    // read actual user
    const user = await tables.user.readById(id);
    if (user == null) {
      res.status(404).json({ message: "L'utilisateur n'existe pas" });
      return;
    }

    // Calculer le nouveau score
    const newScore = user.score + score;

    // Mettre à jour uniquement le score de l'utilisateur
    const result = await tables.user.addScore(newScore, id);

    // Répondre avec succès si la mise à jour a réussi
    if (result) {
      res.status(200).json({ message: "Points ajoutés avec succès" });
    } else {
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour des points" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, edit, add, remove, addScore };
