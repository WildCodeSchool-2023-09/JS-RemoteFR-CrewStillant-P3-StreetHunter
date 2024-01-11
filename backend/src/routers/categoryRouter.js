const express = require("express");

const categoryRouter = express.Router();

const {
  browse,
  add,
  read,
  edit,
  remove,
} = require("../controllers/categoryControllers");

categoryRouter.get("/", browse);
categoryRouter.get("/:id", read);
categoryRouter.post("/", add);
categoryRouter.put("/:id", edit);
categoryRouter.delete("/:id", remove);

module.exports = categoryRouter;
