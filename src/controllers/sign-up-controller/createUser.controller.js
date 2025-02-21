import { Users } from "../../schemas/users.schema.js"
import bcrypt from "bcrypt"

const createUsersController = async (req, res) => {
    const { email,password } = req.body
    try {

        const bcryptedPassword =  bcrypt.hashSync(password, 8)
        const newUser = await Users.create({
            email,
            bcryptedPassword
        })
        res.send(newUser).status(200).JSON("sign up succesfully")
    } catch (error) {
        console.log("error", error)
        res.send().status(200)
    }
}

export default createUsersController