import dotenv from "dotenv";
dotenv.config();

const secret = process.env.JWT_SECRET;
const port = process.env.PORT || "15000";
const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASS;
const mongoUri = process.env.MONGODB_URI;


export { secret, port, user, pass, mongoUri };
