const express = require("express");

const messagingRouter = express.Router();

const {
  browse,
  read,
  add,
  remove,
} = require("../controllers/messagingControllers");
const verifyToken = require("../middlewares/auth");

messagingRouter.get("/", browse);
messagingRouter.get("/:id", read);
messagingRouter.post("/", verifyToken, add);
messagingRouter.delete("/:id", remove);

module.exports = messagingRouter;
