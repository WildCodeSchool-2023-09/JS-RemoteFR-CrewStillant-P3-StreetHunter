const { z } = require("zod");

const userSchema = z.object({
  username: z.string().min(2),
  firstname: z.string().min(2).optional().or(z.literal("")),
  lastname: z.string().min(2).optional().or(z.literal("")),
  email: z.string().email({ message: "email non valide" }).regex(/\./),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)
    .optional(),
  confirmpassword: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)
    .optional(),
  postalcode: z.string().min(3).optional().or(z.literal("")),
  city: z.string().min(2).optional().or(z.literal("")),
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
