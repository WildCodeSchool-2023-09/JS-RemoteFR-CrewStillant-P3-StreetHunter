const { z } = require("zod");

const userSchema = z.object({
  username: z.string().min(2),
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email({ message: "email non valide" }).regex(/\./),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)
    .optional(),
  confirmpassword: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)
    .optional(),
  city: z.string().min(2),
  postalcode: z.string().min(5).optional(),
});

const userProfileValidation = (req, res, next) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (e) {
    next(e);
  }
};
module.exports = userProfileValidation;
