const admins = require('../../models/admins.model')
const bookings = require('../../models/bookings.model')
const users = require('../../models/users.model')
const vms = require('../../models/vms.model')
const turfs = require('../../models/turf.model')
const sports = require('../../models/sports.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    adminLogin: async (req, res) => {
        if(!req.body.name || !req.body.password)  return res.status(400).json({message:'name, password - field is required'})
        await admins.findOne({ name: req.body.name }).then(admin => {
            if (!admin) {
                return res.sendStatus(401); //unauthorized
            } else {
                bcrypt.compare(req.body.password, admin.password).then(response => {
                    if (!response) {
                        return res.sendStatus(401); //unauthorized
                    } else {
                        const accessToken = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
                        return res.status(200).json({ accessToken });
                    }
                }).catch(err=>{
                    res.status(400).json({message:'error occured'})
                    console.log(err)
                })
            }
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({message:'error occured'})
        })
    },
    getDashboardDetails: async (req,res) => {
        try {
            const bookingsCount = await bookings.countDocuments()
            const pendingTurfs = await turfs.find({approved:false}).populate('vmId').sort({_id:-1})
            const sportsCount = await sports.countDocuments()
            const usersCount = await users.countDocuments()
            const turfsCount = await turfs.countDocuments()
            const vmsCount = await vms.countDocuments()
            const countOfPaymentMethod = await bookings.aggregate([{$project:{paymentType:1}},{$group:{_id:'$paymentMethod',count:{$sum:1}}}])
            res.status(200).json({bookingsCount,usersCount,vmsCount,turfsCount,sportsCount,pendingTurfs})
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error occured'})
        }
    }
}