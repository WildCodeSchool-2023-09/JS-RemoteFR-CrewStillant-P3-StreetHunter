const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../controllers/userControllers");

router.get("/user", browse);
router.get("/:id", read);
router.post("/user", add);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = { browse, read, add, edit, destroy };
