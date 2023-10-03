import {signup} from "../controllers/userController.js";
import express from "express";
import { validate } from "../middlewares/validator.js";
import { userValidate } from "../middlewares/userValidate.js";

const userRoutes = express.Router()
userRoutes.post("/signup", validate(userValidate),signup);


export { userRoutes };