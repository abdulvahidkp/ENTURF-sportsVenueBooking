const jwt = require('jsonwebtoken');
const user = require('../models/users.model');

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) return res.status(401).json({ msg: 'No authentication token, access denied' });
        //else
        const verified = jwt.verify(authHeader, process.env.JWT_SECRET);
        if (!verified) return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        //else
        const userExist = await user.findById(verified.id)
        if (!userExist) return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        req._id = verified.id;
        next();
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = verifyToken;