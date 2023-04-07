const bookings = require('../../models/bookings.model')

module.exports = {
    getBookings:async (req,res) => {
        bookings.find().populate('turfId').populate('userId').then(response => {
            res.status(200).json(response)
        }).catch(err=> {
            res.status(500).json(err.message)
        })
    }
}