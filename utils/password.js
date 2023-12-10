import { hash, genSalt, compare } from "bcrypt";

export const hashPassword = async (password) => {
  try {
    let salt = await genSalt(10);
    let myHash = await hash(password, salt);
    return myHash;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hash) => {
  return await compare(password, hash);
};
