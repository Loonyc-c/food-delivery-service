import express from 'express'
import createCategory from '../controllers/category.controller/createCategory.controller.js'
import getCategories from '../controllers/category.controller/getCategories.controller.js'
import updateCategory from '../controllers/category.controller/updateCategory.controller.js'
import deleteCategory from '../controllers/category.controller/deleteCategory.controller.js'

export const categoriesRouter = express.Router()

categoriesRouter.post("/",createCategory)
categoriesRouter.get("/",getCategories)
categoriesRouter.put("/:id",updateCategory)
categoriesRouter.delete("/:id",deleteCategory)
