const express = require("express");

const router = express.Router();

const artWorkRouter = require("./routers/artWorkRouter");
const userRouter = require("./routers/userRouter");

router.use("/artwork", artWorkRouter);
router.use("/user", userRouter);

module.exports = router;
