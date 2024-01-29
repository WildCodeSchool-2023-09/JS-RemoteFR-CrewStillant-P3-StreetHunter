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

// Don't change these lines:
app.use("/public/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", req.originalUrl));
});

const router = require("./router");

app.use("/api", router);

app.use("*", (req, res) => {
  if (req.originalUrl.includes("assets")) {
    res.sendFile(
      path.resolve(__dirname, `../../frontend/dist/${req.originalUrl}`)
    );
  } else {
    res.sendFile(path.resolve(__dirname, `../../frontend/index.html`));
  }
});

module.exports = app;
