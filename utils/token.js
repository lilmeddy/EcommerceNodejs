import jwt from "jsonwebtoken";
import { secret } from "../config/constants.js";
const  { sign, verify } = jwt

export const signToken = (payload) => {
  let token = sign(payload, secret, {
    expiresIn: "5d",
  });
  return token;
};

export const verifyToken = (token) => {
  let payload = verify(token, secret);
  return payload;
};
