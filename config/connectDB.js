import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { mongoUri } from "./constants.js";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    let connect = await mongoose.connect(mongoUri);
    console.log(`Database connected at ${connect.connection.host}`);
  } catch (error) {
    console.log("error" + error);
  }
};

export default connectDB;
