import mongoose, { mongo } from "mongoose"

const foodOrderSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "user"},
    totalPrice: { type: number, required: true }, 
    foodOrderItems:[{type:mongoose.Types.ObjectId, ref: "foodOrderItem"}],
    status: {type:string, enum: ["PENDING","CANCELED","DELIVERED"]}
})

export const FoodOrderModel = mongoose.model("foodOrder",foodOrderSchema)
