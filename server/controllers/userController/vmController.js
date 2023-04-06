const vms = require('../../models/vms.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = {
    mobileExist:(req,res) => {
        if(!req.body.mobile) return res.status(400).json({message:'mobile - field is required'})
        vms.findOne({ mobile: req.body.mobile }).then(async (response) => {
            if (response) {
                return res.status(400).json({message:'mobile number already exist'}); //user already exist
            } else {
                return res.sendStatus(200);
            }
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    vmSignup: async (req,res) => {
        if( !req.body.name || !req.body.mobile || !req.body.password || !req.body.image ) return res.status(400).json({message:'name, mobile, password, image - fields is required'})
        vms.findOne({ mobile: req.body.mobile }).then(async (response) => {
            if (response) {
                return res.status(409).json({message:'mobile number already exist'}); //user already exist
            } else {
                req.body.password = await bcrypt.hash(req.body.password, 10)
                await vms.create(req.body).then((response) => {
                    const accessToken = jwt.sign({
                        id: response._id
                    }, process.env.JWT_SECRET,
                        { expiresIn: '7d' }
                    )
                    res.status(201).json({ accessToken,name:response.name,mobile:response.mobile,image:response.image,status:response.status,reason:response.reason })
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