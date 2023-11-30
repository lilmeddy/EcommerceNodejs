import express from "express";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRouter.js";
import { port } from "./config/constants.js";
import morgan from "morgan";

const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"))
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use("/auth", authRouter);

const startApp = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log("app is listening at port 15000");
  });
};

startApp();
