import { verifyToken } from "../utils/token";
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token || token == "") {
      throw new Error("Enter token in authorization header");
    }
    let payload = await verifyToken(token);
    req.userId = payload.id;
    next();
  } catch (error) {
    next(error);
  }
};
