const express = require("express");

const router = express.Router();

const {
  browse,
  browseValidated,
  read,
  edit,
  add,
  remove,
  validateArtwork,
} = require("../controllers/artWorkControllers");

router.get("/user", browseValidated);
router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit, validateArtwork);
router.post("/", add);
router.delete("/:id", remove);
router.put("/:id/validate", validateArtwork);

module.exports = router;
