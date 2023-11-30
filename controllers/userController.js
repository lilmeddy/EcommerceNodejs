import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { comparePassword } from "../utils/password.js";
import { signToken } from "../utils/token.js";

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(401).json({ message: "Email used", status: false });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      phone,
    });
    return res.status(201).json({ message: "User Created", status: true });
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res
        .status(401)
        .json({ message: "User not found. Please Register", status: false });
    }
    const verifyPass = await comparePassword(password, checkUser.password);
    if (!verifyPass) {
      return res
        .status(401)
        .json({ message: "Incorrect Password", status: false });
    }

    const token = signToken(checkUser);

    return res.status(200).json({
      message: `Login Successfully, User ${checkUser.firstName}`,
      status: true,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export { signup, login };