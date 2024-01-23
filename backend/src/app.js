const express = require("express");
const path = require("path");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);
// transfers the file at the given path for artwork files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", req.originalUrl));
});

const router = require("./router");

app.use("/api", router);

module.exports = app;
