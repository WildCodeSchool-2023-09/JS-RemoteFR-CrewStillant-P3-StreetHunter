const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  remove,
} = require("../controllers/artWorkControllers");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit);
router.post("/", add);
router.delete("/:id", remove);

module.exports = router;
