import { signup, login } from "../controllers/authController.js";
import express from "express";
import { validate } from "../middlewares/validator.js";
import {
  userLoginValidate,
  userValidate,
} from "../middlewares/userValidate.js";

const authRouter = express.Router();
authRouter.post("/signup", validate(userValidate), signup);
authRouter.post("/login", validate(userLoginValidate), login);

export default authRouter ;
