const vms = require('../../models/vmModel');
const bcrypt = require('bcrypt');
require('dotenv/config');
const jwt = require('jsonwebtoken')


module.exports = {
    signin:async (req,res) => {
        const { mobile, password } = req.body
        if (!mobile || !password) return res.status(400).json({ 'message': 'mobile number and password required.' });
        else {
            const foundUser = await vms.findOne({ mobile })
            if (!foundUser) return res.sendStatus(401); //unauthorized
            else {
                const match = bcrypt.compare(password, foundUser.password)
                if (match) {
                    if (foundUser.blockStatus) {
                        return res.sendStatus(403) //refuse to authorize it
                    } else {
                        const accessToken = jwt.sign({ id: foundUser._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                        res.status(200).json({ accessToken, name: foundUser.name, mobile: foundUser.mobile });
                    }
                } else {
                    res.sendStatus(401)
                }
            }
        }
    }
}