const users = require('../../models/users.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv/config')

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_ ]{3,23}$/;
const MOBILE_REGEX = /^[0-9]{10}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;

module.exports = {
    mobileExist: (req, res) => {
        if(!req.body.mobile) return res.status(400).json({ message: 'mobile - field required' })
        if (!MOBILE_REGEX.test(req.body.mobile)) return res.status(400).send({message:'Enter a valid number.'});
        users.findOne({ mobile: req.body.mobile }).then((response) => {
            if (response) {
                return res.status(409).json({message:'mobile number already exist'}) //user already exist
            } else {
                return res.status(200).json({message:'mobile number is not exist'});
            }
        }).catch(err => {
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    userSignup: (req, res) => {
        if (!req.body.mobile || !req.body.password || !req.body.name) return res.status(400).json({ message: 'name, mobile, password - fields required' })
        if (!USER_REGEX.test(req.body.name)) return res.status(400).json({ message: `name - "4 to 23 character", "required Must begin with a letter", "Letters, numbers, underscores, hyphens allowed."` });
        if (!PWD_REGEX.test(req.body.password)) return res.status(400).send({message:'password - "8 to 24 character", "Must include uppercase and lowercase letters, a number and a special character" , "Allowed special character: ! @ # * $ % "'});
        if (!MOBILE_REGEX.test(req.body.mobile)) return res.status(400).send({message:'Enter a valid number.'});
        users.findOne({ mobile: req.body.mobile }).then(async (response) => {
            if (response) {
                return res.status(409).json({ message: 'mobile - already exist' }); //user already exist
            } else {
                req.body.password = await bcrypt.hash(req.body.password, 10)
                await users.create(req.body).then((response) => {
                    const accessToken = jwt.sign({
                        id: response._id
                    }, process.env.JWT_SECRET,
                        { expiresIn: '7d' }
                    );
                    res.status(201).json({ accessToken })
                }).catch(err => {
                    console.log(err.message)
                    res.status(400).json({ message: 'error occured', err: err.message })
                })
            }
        }).catch(err => {
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    userSignin: async (req, res) => {
        const { mobile, password } = req.body
        if (!mobile || !password) return res.status(400).json({ 'message': 'mobile number and password required.' });
        else {
            const foundUser = await users.findOne({ mobile })
            if (!foundUser) return res.status(401).json({ message: 'incorrect mobile number or password' }) //unauthorized
            else {
                bcrypt.compare(password, foundUser.password).then((response) => {
                    if (response) {
                        if (foundUser.blockStatus) {
                            return res.status(403).json({ message: 'user blocked by admin' }) //refuse to authorize it
                        } else {
                            const accessToken = jwt.sign({ id: foundUser._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                            res.status(200).json({ accessToken, name: foundUser.name, mobile: foundUser.mobile, wallet: foundUser.wallet });
                        }
                    } else {
                        res.status(401).json({ message: 'incorrect mobile number or password' })
                    }
                }).catch(err => {
                    console.log(err.message)
                    res.status(400).json({ message: 'error occured' , err:err.message })
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
    MobileExistForForgot: (req, res) => {
        if(!req.query.mobile) return res.status(400).json({message:'mobile - field is required in query form'})
        if(!MOBILE_REGEX.test(req.query.mobile)) return res.status(400).json({message:'Enter a valid number.'})
        users.findOne(req.query).then(async (response) => {
            if (response) {
                return res.status(200).json({message:'mobile number found in dbs'}); //user already exist
            } else {
                return res.status(404).json({message:'mobile number not found in dbs'});  //not found
            }
        }).catch(err => {
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    newPassSet: async (req, res) => {
        if(!req.body.pwd || !req.body.mobile) return res.status(400).json({message:'mobile, pwd - fields is required'})
        if(!MOBILE_REGEX.test(req.body.mobile)) return res.status(400).json({message:'Enter a valid number.'})
        if (!PWD_REGEX.test(req.body.pwd)) return res.status(400).send({message:'password - "8 to 24 character", "Must include uppercase and lowercase letters, a number and a special character" , "Allowed special character: ! @ # * $ % "'});
        req.body.pwd = await bcrypt.hash(req.body.pwd, 10)
        users.updateOne({ mobile: req.body.mobile }, { $set: { password: req.body.pwd } }).then(response => {
            res.sendStatus(200);
        }).catch(err => {
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    googleSignin: async (req, res) => {
        if(!req.body.email || !req.body.fullName) return res.status(400).json({message:'email, fullName - fields is required'});
        const { email, fullName } = req.body
        users.findOne({ email }).then(async (response) => {
            if (response) {
                const accessToken = jwt.sign({ id: response._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                res.status(200).json({ accessToken, name: response.name, mobile: response.email })
            } else {
                let data = await users.create({ email, name: fullName })
                const accessToken = jwt.sign({ id: data._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                res.status(200).json({ accessToken, name: data.name, mobile: data.email })
            }
        })
    },
    setName: async (req,res) => {
        const {name} = req.body
        if(!name) return res.status(400).json({message:'name - field is required'});
        try {
            let user = await users.findOneAndUpdate({_id:req._id},{$set:{name}},{new:true})
            return res.status(200).json({message:'name changed succesfully',name:user.name});
        } catch (error) {
            console.log(error.message)
            res.status(400).json({message:'error occured',error:error.messaage})
        }
    }
}