const users = require('../../models/users.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv/config')


module.exports = {
    mobileExist: (req, res) => {
        users.findOne({ mobile: req.body.mobile }).then((response) => {
            if (response) {
                return res.sendStatus(409); //user already exist
            } else {
                return res.sendStatus(200);
            }
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    userSignup: (req, res) => {
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
                }).catch(err=>{
                console.log(err.message)
                res.status(400).json({ message: 'error occured', err: err.message })
            })
            }
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    userSignin: async (req, res) => {
        console.log(req.body);
        const { mobile, password } = req.body
        if (!mobile || !password) return res.status(400).json({ 'message': 'mobile number and password required.' });
        else {
            const foundUser = await users.findOne({ mobile })
            if (!foundUser) return res.status(401).json({message:'incorrect mobile number or password'}) //unauthorized
            else {
                bcrypt.compare(password, foundUser.password).then((response)=>{
                    if(response){
                        if (foundUser.blockStatus) {
                            return res.status(403).json({message:'user blocked by admin'}) //refuse to authorize it
                        } else {
                            const accessToken = jwt.sign({ id: foundUser._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                            res.status(200).json({ accessToken, name: foundUser.name, mobile: foundUser.mobile });
                        }
                    }else{
                        res.status(401).json({message:'incorrect mobile number or password'}) 
                    }
                }).catch(err=>{
                    console.log(err.message) 
                    res.status(400).json({message:'erro occured'})
                })
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
        }
    },
    getUser: (req, res) => {
        const token = req.headers['x-access-token'];
        try {
            const { id } = jwt.verify(token, process.env.JWT_SECRET);
            return res.status(200).json({ id })
        } catch (error) {
            console.log(error.message)
            res.status(401).json({ error: 'invalid token' })
        }
    },
    MobileExistForForgot: (req,res)=>{
        users.findOne(req.query).then(async (response) => {
            if (response) {
                return res.sendStatus(200); //user already exist
            } else {
                return res.sendStatus(404);  //not found
            }
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    newPassSet:async (req,res)=>{
        req.body.pwd = await bcrypt.hash(req.body.pwd, 10)
        users.updateOne({mobile:req.body.mobile},{$set:{password:req.body.pwd}}).then(response=>{
            console.log(response);
            res.sendStatus(200);
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    }
}