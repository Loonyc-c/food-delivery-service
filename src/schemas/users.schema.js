import mongoose, { mongo } from "mongoose";

const usersSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  address: { type: String },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
});

export const Users = mongoose.model("users", usersSchema);
