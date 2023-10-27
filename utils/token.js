import { sign, verify } from "jsonwebtoken";
const secret = procees.env.JWT_SECRET;

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
