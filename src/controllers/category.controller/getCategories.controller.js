import { CategoriesModel } from "../../schemas/categories.schema.js"


const getCategories = async (req,res) => {
   try{
    const Categories = await CategoriesModel.find()
    res.status(200).json(Categories);   
   } catch(error){
    console.log("error", error);
    res.status(500).json({
        error: "bad request",
        message: "Error occurred while getting categories",
    });
   }
}

export default getCategories