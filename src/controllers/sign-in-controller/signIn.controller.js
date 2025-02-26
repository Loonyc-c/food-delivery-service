
import { Users } from "../../schemas/users.schema.js"
import bcrypt from "bcrypt"

const SignInController = async (req, res) => {
    const { email, password } = req.body

    console.log(Users)

    try {
        const user = await Users.findOne({ email })
        if (!user) {
            return res.status(400).json({
                error: "Bad Request",
                message: "User not found",
            });
        // } else return res.status(200).json({ message: "User found", user });
        
        };

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(isPasswordValid)

        if (!isPasswordValid) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Wrong password",
            });
        }

    } catch (error) {
        console.error("Error during log in:", error);


    }
}

export default SignInController