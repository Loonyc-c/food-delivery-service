import { FoodsModel } from "../../schemas/food.schema.js";


const getFoodController = async (req,res) => {
    try{
        const foodData = await FoodsModel.find({})
        res.send(foodData).status(200)
    } catch(error){
        console.log("error",error)
        res.status(400).json({
            error:"bad request",
            message:"error occurs at getting foods data"
        })
    }
}

export default getFoodController