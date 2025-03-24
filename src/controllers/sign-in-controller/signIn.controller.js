import { Users } from "../../schemas/users.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const SignInController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(400).json({
                error: "Bad Request",
                message: "User not found",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                error: "Bad Request",
                message: "Wrong password",
            });
        }

        const decodePassword = "123"

        const token = jwt.sign(
            { userId: user._id, email: user.email,role:user.role },
            decodePassword
        );

        return res.status(200).json({
            success: true,
            message: "Logged in successfully",
            token:token,
        });
    } catch (error) {
        console.error("Error during log in:", error);
        return res.status(500).json({
            error: "Internal Server Error",
            message: "Something went wrong. Please try again later.",
        });
    }
};

export default SignInController;
