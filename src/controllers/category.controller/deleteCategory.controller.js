import { CategoriesModel } from "../../schemas/categories.schema.js"
import mongoose from "mongoose";

const deleteCategory = async (req, res) => {

    const { id } = req.params

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid category ID" });
        }

        const deletedCategory = await CategoriesModel.findByIdAndDelete(id)

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });


    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            error: "bad request",
            message: "error occured while deleting category"
        })
    }

}

export default deleteCategory