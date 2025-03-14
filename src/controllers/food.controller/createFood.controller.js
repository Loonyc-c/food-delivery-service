import { FoodsModel } from "../../schemas/food.schema.js"
import mongoose from "mongoose";
import multer from "multer";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "ddeq6vbyn",
    secure: true,
    api_key: "277486782371414",
    api_secret: "nm-Fw5JrKGIHdMdwxQLjjZDecpk",
});
const storage = multer.memoryStorage();
const upload = multer({ storage });

const createFood = async (req, res) => {
    const { foodName, price, ingredients, category } = req.body

    try {
        if (!mongoose.Types.ObjectId.isValid(category)) {
            return res.status(400).json({ message: "Invalid category ID" });
        }

        const existingFood = await FoodsModel.findOne({ foodName });
        if (existingFood) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Food already exists",
            });
        }

        let imageUrl = "";
        if (req.file) {
            const result = await cloudinary.uploader.upload_stream(
                { folder: "foods" },
                (error, result) => {
                    if (error) {
                        return res.status(500).json({ message: "Image upload failed" });
                    }
                    imageUrl = result.secure_url;
                }
            );
            req.file.stream.pipe(result);
        }


        const createdFood = await FoodsModel.create({
            foodName,
            price,
            image:imageUrl,
            ingredients,
            category
        });

        res.status(201).json({
            message: "Successfully created food",
            food: createdFood,
        });


    } catch (error) {
        console.log(`error occurs during creating food in cotroller ${error}`)
    }
}

export default createFood

