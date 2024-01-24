const { z } = require("zod");

const ArtworkFormSchema = z.object({
  title: z
    .string({
      required_message: "ce champ est requis",
      invalid_type_message:
        "le titre doit contenir uniquement des chiffres et des lettres",
    })
    .min(3)
    .regex(/[a-zA-Z0-9]/),
  longitude: z.string().min(3),
  latitude: z.string().min(3),
  category_id: z
    .string({
      required_message: "ce champ est requis",
    })
    .min(1),
});

const formValidation = (req, res, next) => {
  // eslint-disable-next-line prefer-object-spread
  const data = Object.assign({}, req.body);
  try {
    if (ArtworkFormSchema.parse(data)) {
      next();
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

module.exports = formValidation;
