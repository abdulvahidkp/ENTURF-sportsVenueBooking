const turfs = require('../../models/turf.model')

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
    }
}