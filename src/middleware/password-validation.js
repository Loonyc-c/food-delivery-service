export const passwordValidation = (req, res, next) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    const { password } = req.body

    if (!password) {
        return res.status(400).json({
            error: "Bad Request", message: "Password required"
        })
    } else if (password.length < 6) {
        return res.status(400).json({
            error: "Bad Request", message: "Password at least has 6 characters"
        })
    } else if (!passwordRegex.test(password)) {
        return res.status(400).json({
            error: "Bad Request", message: "Password must include at least one uppercase, number, symbol"
        })
    }
    next()

}