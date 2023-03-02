const jwt = require('jsonwebtoken');
const vms = require('../models/vms.model')

const verifyToken = async (req, res, next) => {
    try {
        console.log('middleware')
        const authHeader = req.header('Authorization');
        if (!authHeader) return res.status(401).json({ msg: 'No authentication token, access denied' });
        //else
        const verified = jwt.verify(authHeader, process.env.JWT_SECRET);
        if (!verified) return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        //else
        const vmExist = await vms.findById(verified.id)
        if (!vmExist) return res.status(401).json({ msg: "Token verification failed, authorization denied" });
        req._id = verified.id;
        next();
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = verifyToken;   