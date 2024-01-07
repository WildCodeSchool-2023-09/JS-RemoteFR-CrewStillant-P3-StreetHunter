const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hash = async (req, res, next) => {
  const hashed = await argon2.hash(req.body.password, hashingOptions);
  req.body.hashedpwd = hashed;
  delete req.body.password;
  delete req.body.confirmpassword;
  next();
};

module.exports = hash;
