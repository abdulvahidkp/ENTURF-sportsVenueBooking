const bookings = require('../../models/bookings.model')
const turfs = require('../../models/turf.model')
const { ObjectId } = require('mongodb')

module.exports = {
    getBookings: async (req, res) => {
        try {
            const data = await bookings.aggregate([{ $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'userDetails' } }, { $unwind: '$userDetails' }
                , { $lookup: { from: 'turfs', localField: 'turfId', foreignField: '_id', as: 'turfDetails' } }, { $unwind: '$turfDetails' }, { $match: { 'turfDetails.vmId': new ObjectId(req._id) } },
            {
                $project: {
                    _id: 1,
                    venueId: '$turfDetails._id',
                    venueName: '$turfDetails.venueName',
                    slotTime: 1,
                    slotDate: 1,
                    facility: 1,
                    sport: 1,
                    price: 1,
                    paymentType: 1,
                    refund: 1,
                    name: '$userDetails.name',
                    mobile: '$userDetails.mobile'
                }
            }
            ])
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'error occured', error: error.message })
        }
    },
    makeOfflineBook: async (req, res) => {
        const { turfId, slotTime, slotDate, sport, facility } = req.body;
        if (!turfId || !slotTime || !slotDate || !sport || !facility) return res.status(400).json({ messaage: 'turfId, slotTime, slotDate, sport, facility - fields required' })
        try {
            let how =await bookings.create({ turfId, slotTime, slotDate, sport, facility, paymentType: 'offline' })
            console.log(how)
            return res.status(200).json({ message: 'payment verified succesfully' })
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ message: 'error occured', error: error.message })
        }
    }
}