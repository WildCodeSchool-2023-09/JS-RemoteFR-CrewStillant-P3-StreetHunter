const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const DateOfCreation = Date.now();
    const arrayFile = Buffer.from(file.originalname, "latin1")
      .toString("utf8")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll(/[/+":@&“”'’-]/g, "")
      .replaceAll(" ", "_")
      .split(".");
    const extendValue = arrayFile.pop();
    cb(null, `${arrayFile}_${DateOfCreation}.${extendValue}`);
  },
});
module.exports = multer({ storage }).single("file");
