const express = require("express");

const router = express.Router();

const artWorkRouter = require("./routers/artWorkRouter");

router.use("/artwork", artWorkRouter);

module.exports = router;
