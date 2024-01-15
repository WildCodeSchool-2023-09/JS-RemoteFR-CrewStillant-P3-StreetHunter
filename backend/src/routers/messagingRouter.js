const express = require("express");

const messagingRouter = express.Router();

const {
  browse,
  read,
  add,
  remove,
} = require("../controllers/messagingControllers");

messagingRouter.get("/", browse);
messagingRouter.get("/:id", read);
messagingRouter.post("/", add);
messagingRouter.delete("/:id", remove);

module.exports = messagingRouter;
