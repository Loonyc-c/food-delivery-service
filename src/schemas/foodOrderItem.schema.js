import mongoose from "mongoose"

const foodOrderItemSchema = new mongoose.Schema({
    foodName: {type: mongoose.Types.ObjectId, ref: "foods"},
    quantity:{type:Number,required: true}
})

export const FoodOrderItemsModel = mongoose.model("foodOrderItem",foodOrderItemSchema)
