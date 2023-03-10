const vms = require('../../models/vms.model');
const bcrypt = require('bcrypt');
require('dotenv/config');
const jwt = require('jsonwebtoken')


module.exports = {
    signin: async (req, res) => {
        const { mobile, password } = req.body
        if (!mobile || !password) return res.status(400).json({ 'message': 'mobile number and password required.' });
        else {
            //checking user exist with his mobile
            try {
                const foundUser = await vms.findOne({ mobile })

                if (foundUser && (await bcrypt.compare(password, foundUser.password))) {

                    //checking user blocked
                    if (foundUser.blockStatus) {
                        res.status(403).json({ message: 'blocked' }) //refuse to authorize it
                    } else {
                        const accessToken = jwt.sign({ id: foundUser._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                        res.status(200).json({ accessToken, name: foundUser.name, mobile: foundUser.mobile, document:foundUser.image, status: foundUser.status, reason:foundUser.reason });
                    }

                } else {
                    res.status(401).json({ message: 'invalid mobile or password' }) // unauthorized
                }
            } catch (error) {
                console.log(error.message)
                res.status(400).json({ message: 'error occured', err: error.message })
            }
        }
    },
    isApproved: async (req, res) => {
        const id = req._id
        vms.findOne({ _id: id }).then(response => {
            console.log(response);
            res.status(200).json(response)
        }).catch(err => res.status(400).json({ message: 'error occured' }))
    },
    updateProfile:async (req,res) => {
        const id = req._id;
        console.log(req.body)
        const {name,mobile,image,rejectUpdate} = req.body
        if(rejectUpdate) {
            if(image){
                vms.findOneAndUpdate({_id:id},{'$set':{name,image,reason:'',status:'pending'}}).then(response=>{
                    console.log(response)
                    res.status(200).json(response)
                })
            } else if(req.body?.rejectUpdate) {
                vms.findOneAndUpdate({_id:id},{'$set':{name,reason:'',status:'pending'}}).then(response=>{
                    console.log(response)
                    res.status(200).json(response)
                })

            }
        }
    }
}