const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.APP_SECRET);
    const admin = decodedToken.isAdmin;

    if (!admin) {
      res.json({ error: "Non-admin user" });
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

module.exports = isAdmin;
