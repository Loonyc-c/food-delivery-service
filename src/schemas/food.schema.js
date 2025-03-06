import mongoose from "mongoose"

const foodSchema = new mongoose.Schema({
    foodName: { type: String, required: true },
    price: { type: Number, required: true }, 
    image:{type:String,required:true},
    ingredients:{type:[String],required:true},
    category: {type: mongoose.Types.ObjectId, ref: "categories"}
})

export const FoodsModel = mongoose.model("foods",foodSchema)
