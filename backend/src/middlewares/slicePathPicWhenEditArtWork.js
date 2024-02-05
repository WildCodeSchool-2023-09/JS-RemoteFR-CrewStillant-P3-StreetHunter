const slicedPathPicWhenEditArtWork = (req, res, next) => {
  const reqProtocolLength = `${req.protocol}://${req.get(
    "host"
  )}/public/images/`.length;
  try {
    if (req.body.path_pic.includes(req.protocol)) {
      req.body.path_pic = req.body.path_pic.slice(reqProtocolLength);
    }

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = slicedPathPicWhenEditArtWork;
