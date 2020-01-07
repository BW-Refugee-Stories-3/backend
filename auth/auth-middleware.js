const jwt = require("jsonwebtoken")

module.exports = (req, res, next ) => {
    const token = req.headers.authorization
    if (req.decodedJwt) {
        next();

    } else if (token) {
        jwt.verify(token, "Everygoodboydoesfine", (err, decodedJwt) => {
            if (err) {
                res.status(401).json({ message: "Access Denied"})
            }
        })
    }
}