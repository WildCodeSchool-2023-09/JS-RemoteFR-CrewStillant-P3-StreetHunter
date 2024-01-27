const express = require("express");

const app = express();
const path = require("path");

const cors = require("cors");

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);

app.use(express.json());
const router = require("./router");

app.use("/api", router);

const router = require("./router");

app.use("/api", router);

// Don't change these lines:
app.use("/public/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", req.originalUrl));
});

app.use("*", (req, res) => {
  if (req.originalUrl.includes("assets")) {
    res.sendFile(
      path.resolve(__dirname, `../../frontend/dist/${req.originalUrl}`)
    );
  } else {
    res.sendFile(path.resolve(__dirname, `../../frontend/dist/index.html`));
  }
});

module.exports = app;
