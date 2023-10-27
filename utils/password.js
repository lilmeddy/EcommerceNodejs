import {compare} from "bcryptjs"

export const comparePassword = (password, hash)=>{
   return compare(password, hash)
}