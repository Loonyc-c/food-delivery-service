import { CategoriesModel } from "../../schemas/categories.schema.js"
import mongoose from "mongoose";

const updateCategory = async (req, res) => {

    const {id} = req.params;
    const {category} = req.body

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid category ID format" });
        }

        const existingCategory = await CategoriesModel.findOne({ category })
        if (existingCategory) {
            return res.status(404).json({
                message: "Category already exist",
            });
        }
        const updatedCategory = await CategoriesModel.findByIdAndUpdate(
            id, 
            { category }, 
            { new: true } 
        );

        res.status(200).json({
            message: "Successfully updated category",
            category: updatedCategory,
        });


    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            error: "bad request",
            message: "Error occurred at updating categories",
        });
    }


}

export default updateCategory