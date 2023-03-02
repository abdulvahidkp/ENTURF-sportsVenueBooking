const jwt = require('jsonwebtoken');
const admins = require('../models/admins.model');

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        console.log('authHeader',authHeader)
        if (!authHeader) return res.status(401).json({ msg: 'No authentication token, access denied' });
        //else
        const verified = jwt.verify(authHeader, process.env.JWT_SECRET);
        console.log('verified',verified)
        if (!verified) return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        //else
        const adminExist = await admins.findById(verified.id)
        console.log('adminExist',adminExist)
        if (!adminExist) return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        req._id = verified.id;
        console.log('near next');
        next();
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = verifyToken;   
