import mongoose, { mongo } from "mongoose"

const usersSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false }, 
})

export const Users = mongoose.model("users",usersSchema)
