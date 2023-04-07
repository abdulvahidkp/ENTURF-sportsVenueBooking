const turfs = require('../../models/turf.model')
const bookings = require('../../models/bookings.model')
const Razorpay = require('razorpay')
const crypto = require('crypto')

module.exports = {
    getTurfs: async (req, res) => {
        const { district } = req.params;
        turfs.find({ district, approved: true, isBlocked: false, vmIsBlocked: false }).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            console.log(err)
            res.status(400).json({ message: 'error occured at finding turf based on district' });
        })
    },
    getTurf: async (req, res) => {
        const { _id } = req.params;
        turfs.findOne({ _id }).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            console.log(err)
            res.status(400).json({ message: 'error occured' })
        })
    },
    getBookedSlots:async (req,res) => {
        try {
            if(!req.body.turfId || !req.body.slotDate) res.status(400).json({message:'turfId, slotDate - fields required'})
            const response = await bookings.find({...req.body,refund:'not processed'}, { slotTime: 1, _id: 0 })
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
        }
    },
    
}