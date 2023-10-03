import { userModel } from "../models/userModel";
import bcryptjs from "bcryptjs";


const signup = async(req,res,next) =>{
    try {
        const {firstName, lastName, email, password} = req.body
        const checkUser = await userModel.findOne({email:email})
        if(checkUser){
            return res.status(401).send({ message: "Email used", status: false });
        }
    } catch (error) {
        
    }
}