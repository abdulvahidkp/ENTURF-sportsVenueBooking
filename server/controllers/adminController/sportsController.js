const sports = require('../../models/sports.model')

module.exports = {
    getSports: async (req, res) => {
        await sports.find().then(sportsDatas => {
            res.status(200).json({ sportsDatas })
        })
    },
    changeStatus: async (req, res) => {
        const { _id, facility, status } = req.body
        console.log(req.body);
        await sports.updateOne({ _id }, { $set: { 'facilityDetails.$[elem].status': status } }, { arrayFilters: [{ 'elem.facility': facility }] })
        .then(()=>res.sendStatus(200))
    }
}