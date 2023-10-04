import { userModel } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const checkUser = await userModel.findOne({ email: email });
    if (checkUser) {
      return res.status(401).send({ message: "Email used", status: false });
    }

    const signUp = await userModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    console.log(signUp);
    res.status(210).send({ message: "User Created", status: true });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkUser = await userModel.findOne({ email: email });
    if (!checkUser) {
      return res
        .status(401)
        .send({ message: "User not found. Please Register", status: false });
    }
    const verifyPass = await bcryptjs.compare(password, checkUser.password)
    if (!verifyPass){
        return res.status(401).send({ message: "Incorrect Password", status: false }); 
    }
    const token = await generateUserToken(email)
    console.log(token,33);
    return res
        .status(200)
        .send({
            message: `Login Successfully, User ${checkUser.firstName}`,
            status: true,
            token
        });
  } catch (error) {}
};

export { signup };
