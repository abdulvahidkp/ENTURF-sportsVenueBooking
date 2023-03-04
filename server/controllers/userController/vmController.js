const vms = require('../../models/vms.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    mobileExist:(req,res) => {
        vms.findOne({ mobile: req.body.mobile }).then(async (response) => {
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
    
    vmSignup: async (req,res) => {
        console.log(req.body)
        console.log(req.body.image)
        vms.findOne({ mobile: req.body.mobile }).then(async (response) => {
            if (response) {
                return res.sendStatus(409); //user already exist
            } else {
                req.body.password = await bcrypt.hash(req.body.password, 10)
                await vms.create(req.body).then((response) => {
                    const accessToken = jwt.sign({
                        id: response._id
                    }, process.env.JWT_SECRET,
                        { expiresIn: '7d' }
                    )
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
    }
}