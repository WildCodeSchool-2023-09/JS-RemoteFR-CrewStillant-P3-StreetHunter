const express = require("express");

const router = express.Router();

const artWorkRouter = require("./routers/artWorkRouter");
const roleRouter = require("./routers/roleRouter");
const artistRouter = require("./routers/artistRouter");
const categoryRouter = require("./routers/categoryRouter");

router.use("/artwork", artWorkRouter);
router.use("/role", roleRouter);
router.use("/artist", artistRouter);
router.use("/category", categoryRouter);

module.exports = router;
