const express = require("express");

const loginRouter = express.Router();

const { login } = require("../controllers/authControllers");

loginRouter.post("/", login);

module.exports = loginRouter;
