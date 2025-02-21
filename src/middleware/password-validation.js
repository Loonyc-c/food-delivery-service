export const passwordValidation = (req,res,next) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    const {password} = req.body

    if (!password) {
        res.status(400).json({
            error: "Bad Request", message: "Password required"
        })
    } else if (password.length < 6) {
        res.status(400).json({
            error: "Bad Request", message: "Password at least has 6 characters"
        })
    } else if (!passwordRegex.test(password)) {
        res.status(400).json({
            error: "Bad Request", message: "Password must include at least one uppercase, number, symbol"
        })
    } else {
        next()
    }
}