const sports = require('../../models/sportsModel.js')

module.exports   = {
    getSports: async (req, res) => {
        await sports.find().then(sportsDatas=>{
            console.log(sportsDatas);
            res.status(200).json({sportsDatas})
        })
    },
    blockStatus: async (req,res) => {
        const {_id} = req.params;
        await sports.updateOne({_id})
    }
}