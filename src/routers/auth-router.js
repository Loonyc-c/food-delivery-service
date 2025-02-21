import express from 'express'
import getUsers from '../controllers/sign-up-controller/getUser.controller.js'
import createUsersController from '../controllers/sign-up-controller/createUser.controller.js'
import { emailValidation } from '../middleware/email-validation.js'
import { passwordValidation } from '../middleware/password-validation.js'

export const authRouter = express.Router()

authRouter.get("/sign-up",getUsers)
authRouter.post("/sign-up",emailValidation,passwordValidation, createUsersController)