const users = require('../../models/usersModel')
const bcrypt = require('bcrypt');
const { create } = require('../../models/usersModel');
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    userSignup: async (req, res) => {
        users.findOne({ mobile: req.body.mobile }).then(async (response) => {
            if (response) {
                return res.sendStatus(409); //user already exist
            } else {
                req.body.password = await bcrypt.hash(req.body.password, 10)
                await users.create(req.body).then((response) => {
                    const accessToken = jwt.sign({
                        id: response._id
                    }, process.env.JWT_SECRET,
                        { expiresIn: '7d' }
                    );
                    res.status(201).json({ accessToken })
                })
            }
        })
    },
    userSignin: async (req, res) => {
        const { mobile, password } = req.body
        if (!mobile || !password) return res.status(400).json({ 'message': 'mobile number and password required.' });

        const foundUser = await users.findOne({ mobile })
        if (!foundUser) return res.sendStatus(401); //unauthorized

        const match = await bcrypt.compare(password, foundUser.password)
        if (match) {
            const accessToken = jwt.sign({
                id: foundUser._id,
            }, process.env.JWT_SECRET,
                { expiresIn: '7d' }
            )
            const refreshToken = jwt.sign({
                id: foundUser._id,
            }, process.env.JWT_SECRET,
                { expiresIn: '7d' }
            )
            //saving refreshToken with current user
            foundUser.refreshToken = refreshToken;
            const result = await foundUser.save();
            console.log(result);
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: "None", maxAge: 24*60*60*1000 })
            res.json({ accessToken })
        } else {
            res.sendStatus(401)
        }

    }
}