const { z } = require("zod");

const userSchema = z.object({
  username: z.string().min(2),
  email: z.string().email().regex(/\./),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),
  confirmpassword: z
    .string()
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/),
});

const userValidation = (req, res, next) => {
  try {
    userSchema.parse(req.body);
    next();
  } catch (e) {
    next(e);
  }
};
module.exports = userValidation;
