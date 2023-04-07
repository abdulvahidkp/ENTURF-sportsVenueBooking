const sports = require('../../models/sports.model')

module.exports = {
    getSports: async (req, res) => {
        sports.find().then(sportsDatas => {
            res.status(200).json({ sportsDatas })
        }).catch((err)=>{
            console.log(err.message);
            res.status(400).json({message:'error occured'})
        })
    },
    changeStatus: async (req, res) => {
        const { _id, facility, status } = req.body
         sports.updateOne({ _id }, { $set: { 'facilityDetails.$[elem].status': status } }, { arrayFilters: [{ 'elem.facility': facility }] })
        .then(()=>res.sendStatus(200)).catch(err=>{
            console.log(err.message);
            res.status(400).json({message:'error occured'})
        })
    }
}