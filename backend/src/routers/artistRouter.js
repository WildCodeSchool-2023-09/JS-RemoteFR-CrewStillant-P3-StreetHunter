const express = require("express");

const artistRouter = express.Router();

const {
  browse,
  read,
  add,
  edit,
  remove,
} = require("../controllers/artistControllers");

artistRouter.get("/", browse);
artistRouter.get("/:id", read);

artistRouter.post("/", add);
artistRouter.put("/:id", edit);

artistRouter.delete("/:id", remove);

module.exports = artistRouter;
