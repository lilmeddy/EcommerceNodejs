import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./database/connectDB.js";
import { userRoutes } from "./routes/userRoutes.js";



dotenv.config();
const app = express();

app.use(cors({origin:"*"}))
app.use(express.json({limit:"100mb"}));
app.use(express.urlencoded({ extended: true, limit:"100mb"}));
app.use("/users", userRoutes)
<<<<<<< HEAD
  
connectDB()
=======

>>>>>>> 8465238e0b704f0924e553a050dc51f5b0716e3a

const startApp = async ()=>{
    await connectDB()
    app.listen(15000, ()=>{
    
        console.log("app is listening at port 15000");
    })
}

startApp()
