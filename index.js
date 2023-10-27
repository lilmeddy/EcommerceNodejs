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


const startApp = async ()=>{
    await connectDB()
    app.listen(15000, ()=>{
    
        console.log("app is listening at port 15000");
    })
}

startApp()
