const express = require("express");

const router = express.Router();

const artWorkRouter = require("./routers/artWorkRouter");
const artistRouter = require("./routers/artistRouter");
const categoryRouter = require("./routers/categoryRouter");
const userRouter = require("./routers/userRouter");
const messagingRouter = require("./routers/messagingRouter");
const loginRouter = require("./routers/authRouter");
// const { verifyToken } = require("./middlewares/auth");

router.use("/artist", artistRouter);
router.use("/category", categoryRouter);
router.use("/login", loginRouter);
router.use("/artwork", artWorkRouter);
// router.use(verifyToken);
router.use("/user", userRouter);
router.use("/messaging", messagingRouter);

module.exports = router;
