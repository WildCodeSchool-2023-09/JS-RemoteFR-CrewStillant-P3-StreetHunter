const { z } = require("zod");

const userSchema = z.object({
  username: z.string().min(2).optional(),
  firstname: z.string().min(2).optional(),
  lastname: z.string().min(2).optional(),
  email: z
    .string()
    .email({ message: "email non valide" })
    .regex(/\./)
    .optional(),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)
    .optional(),
  confirmpassword: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)
    .optional(),
  postalcode: z.string().min(3).optional(),
  city: z.string().min(2).optional(),
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
