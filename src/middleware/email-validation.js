export const emailValidation = (req, res, next) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email } = req.body

    if (!email) {
        return res.status(400).json({
            error: "Bad Request", message: "Email required"
        })
    } else if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: "Bad Request", message: "Wrong email"
        })
    }
    next();
};
