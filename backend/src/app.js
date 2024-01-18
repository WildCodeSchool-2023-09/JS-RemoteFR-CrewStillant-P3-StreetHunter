const express = require("express");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);

app.use(express.json());

// Don't change these lines:
app.use("*", (req, res) => {
    if (req.originalUrl.includes("assets")) {
        res.sendFile(
            path.resolve(__dirname, `../../frontend/dist/${req.originalUrl}`)
        );
    } else {
        res.sendFile(path.resolve(__dirname, `../../frontend/dist/index.html`));
    }
});

const router = require("./router");

app.use("/api", router);

module.exports = app;
