const express = require("express");

const UserRouter = express.Router();
const validatedUser = require("../middlewares/userValidationMiddleware");
const validateProfileUser = require("../middlewares/userProfileValidationMiddleware");
const verifyToken = require("../middlewares/auth");
const hash = require("../middlewares/hashPassword");

const {
  browse,
  read,
  add,
  edit,
  remove,
  addScore,
} = require("../controllers/userControllers");

UserRouter.get("/", browse);
UserRouter.get("/account", verifyToken, read);
UserRouter.post("/", validatedUser, hash, add);
UserRouter.delete("/:id", remove);
UserRouter.put("/:id/addscore", addScore);
UserRouter.put("/", verifyToken, validateProfileUser, edit);

module.exports = UserRouter;
