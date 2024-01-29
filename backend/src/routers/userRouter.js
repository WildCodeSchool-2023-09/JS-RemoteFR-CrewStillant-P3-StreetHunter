const express = require("express");

const UserRouter = express.Router();
const validatedUser = require("../middlewares/userValidationMiddleware");
const validateProfileUser = require("../middlewares/userProfileValidationMiddleware");

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
UserRouter.get("/:id", read);
UserRouter.post("/", validatedUser, hash, add);
UserRouter.delete("/:id", remove);
UserRouter.put("/:id/addscore", addScore);
UserRouter.put("/:id", validateProfileUser, edit);

module.exports = UserRouter;
