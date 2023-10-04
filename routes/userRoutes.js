import {signup, login} from "../contollers/userController.js";
import express from "express";
import { validate } from "../middlewares/validator.js";
import { userLoginValidate, userValidate } from "../middlewares/userValidate.js";

const userRoutes = express.Router()
userRoutes.post("/signup", validate(userValidate), signup);
userRoutes.post("/login",validate(userLoginValidate), login);


export { userRoutes };