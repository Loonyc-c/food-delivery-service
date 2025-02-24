import { Users } from "../../schemas/users.schema.js"
import bcrypt from "bcrypt"

const createUsersController = async (req, res) => {
    console.log(req.body)
    const { email,password } = req.body
    try {

        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const bcryptedPassword =  bcrypt.hashSync(password, 8)

        const createUser = await Users.create({
            email,
            bcryptedPassword
        })

        res.send(createUser).status(200).JSON("sign up succesfully")
    } catch (error) {

        console.log("error", error)
        res.send().status(200)
    }
}

export default createUsersController