import { CategoriesModel } from "../../schemas/categories.schema.js"

const createCategory = async (req, res) => {
    const { category } = req.body
    try {

        const existingCategory = await CategoriesModel.findOne({ category })
        if (existingCategory) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Category already exist",
            });
        }
        const createdCategory = await CategoriesModel.create({
            category,
        });

        res.status(201).json({
            message: "Category created successfully",
            category: createdCategory,
        });

    } catch (error) {
        console.error(`Error occurred during category creation: ${error}`);

        res.status(500).json({
            message: "An error occurred while creating the category.",
        });
    }


}

export default createCategory