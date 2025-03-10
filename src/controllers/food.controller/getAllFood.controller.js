import { FoodsModel } from "../../schemas/food.schema.js";


const getAllFoods = async (req, res) => {
    try{
        const Foods = await FoodsModel.find({})
        res.status(200).json(Foods);
    } catch(error){
        console.log("error", error);
        res.status(500).json({
            error: "bad request",
            message: "Error occurred while getting all food data",
        });
    }
}

export default getAllFoods
