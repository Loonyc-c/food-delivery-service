import mongoose, { mongo } from "mongoose"

const usersSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passowrd: { type: String, required: true }, 
    phoneNumber:{type:String},
    location:{type:String},
    
})

export const Users = mongoose.model("users",usersSchema)
