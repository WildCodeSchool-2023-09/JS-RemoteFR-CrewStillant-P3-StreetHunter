const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  remove,
  validateArtwork,
} = require("../controllers/artWorkControllers");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit, validateArtwork);
router.post("/", add);
router.delete("/:id", remove);
router.put("/:id/validate", validateArtwork);

module.exports = router;
