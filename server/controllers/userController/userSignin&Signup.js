const users = require('../../models/usersModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    mobileExist: async (req, res) => {
        users.findOne({ mobile: req.body.mobile }).then(async (response) => {
            if (response) {
                return res.sendStatus(409); //user already exist
            } else {
                return res.sendStatus(200);
            }
        })
    },
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
        else {
            const foundUser = await users.findOne({ mobile })
            if (!foundUser) return res.sendStatus(401); //unauthorized
            else {
                const match = await bcrypt.compare(password, foundUser.password)
                if (match) {
                    if (foundUser.blockStatus) {
                        return res.sendStatus(403) //refuse to authorize it
                    } else {
                        const accessToken = jwt.sign({ id: foundUser._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                        res.status(200).json({ accessToken, name: foundUser.name, mobile: foundUser.mobile });
                        // const refreshToken = jwt.sign({
                        //     id: foundUser._id,
                        // }, process.env.JWT_SECRET, 
                        //     { expiresIn: '7d' } 
                        // )
                        //saving refreshToken with current user
                        // foundUser.refreshToken = refreshToken;
                        // console.log('refreshToken'+foundUser);
                        // const result = await foundUser.save();
                        // res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: "None", maxAge: 24 * 60 * 60 * 1000 })
                    }
                } else {
                    res.sendStatus(401)
                }
            }
        }
    },
    getUser: (req, res) => {
        const token = req.headers['x-access-token'];
        try {
            const { id } = jwt.verify(token, process.env.JWT_SECRET);
            console.log(id)
            return res.status(200).json({ id })
        } catch (error) {
            console.log(error.message)
            res.status(401).json({ error: 'invalid token' })
        }
    }
}