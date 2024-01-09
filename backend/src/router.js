const express = require("express");

const router = express.Router();

const artWorkRouter = require("./routers/artWorkRouter");
const artistRouter = require("./routers/artistRouter");
const categoryRouter = require("./routers/categoryRouter");
const roleRouter = require("./routers/roleRouter");
const userRouter = require("./routers/userRouter");

router.use("/artwork", artWorkRouter);
router.use("/user", userRouter);
router.use("/artist", artistRouter);
router.use("/category", categoryRouter);
router.use("/role", roleRouter);

module.exports = router;
