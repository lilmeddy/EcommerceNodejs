import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  hash: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
});

// userSchema.pre("save", async function (next) {
//   try {
//     if (this.password !== undefined) {
//       let hashedPassword = await bcrypt.hash(this.password, 10);
//       this.password = hashedPassword;
//       next();
//     }
//   } catch (error) {
//     console.log("Error Hashing Password" + error);
//   }
// });

const User = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema);

export { User };
