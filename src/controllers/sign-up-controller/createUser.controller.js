import { Users } from "../../schemas/users.schema.js"
import bcrypt from "bcrypt"

const createUsersController = async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body
    try {
        const existingUser = await Users.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                error: "Bad Request",
                message: "User already exist",
            });
        }

        const bcryptedPass = bcrypt.hashSync(password, 8)
        console.log(bcryptedPass)


        const createUser = await Users.create({
            email,
            password: bcryptedPass
        })

        res.status(200).json({
            message: "Sign up successfully",
            user: createUser,
        });
    } catch (error) {

        console.log("error", error)
        res.status(200)
    }
}

export default createUsersController

// hello from the other side 