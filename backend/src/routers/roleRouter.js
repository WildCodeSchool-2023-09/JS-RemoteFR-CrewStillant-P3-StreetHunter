const express = require("express");

const roleRouter = express.Router();

const {
  browse,
  read,
  add,
  edit,
  remove,
} = require("../controllers/roleControllers");

roleRouter.get("/", browse);
roleRouter.get("/:id", read);

roleRouter.post("/", add);
roleRouter.put("/:id", edit);

roleRouter.delete("/:id", remove);
module.exports = roleRouter;
