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
} = require("../controllers/userControllers");

UserRouter.get("/", browse);
UserRouter.get("/:id", read);
UserRouter.post("/", validatedUser, hash, add);
UserRouter.put("/:id", validateProfileUser, hash, edit);
UserRouter.delete("/:id", remove);

module.exports = UserRouter;
