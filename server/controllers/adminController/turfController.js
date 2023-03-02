const turfs = require('../../models/turf.model')

module.exports = {
    getTurf: (req, res) => {
        console.log('getting')
        try {
            turfs.find().populate('vmId').then(response => {
                console.log(response);
                res.status(200).json({ response });
            })
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ message: 'error occured', error: error.message })
        }
    },
    approve: async (req, res) => {
        console.log('approving');
        console.log(req.body.id, 'req.params._id')
        const { id } = req.body;
            turfs.updateOne({ id }, { "$set": { approved: true } }).then(response=>{
                console.log(response);
                res.status(200).json({message:'approved successfully'})
            }).catch(err=>{
                console.log(err.message);
                res.status(400).json({message:'error occured'})
            })
    },
    deleteTurf: async (req, res) => {
        console.log('deleting');
        console.log(req.params._id, 'req.params._id');
        turfs.findByIdAndDelete(req.params._id).then(response => {
            console.log(response);
            res.status(200).json({ message: 'turf deleted successfully' });
        }).catch(err => {
            console.log(err.message);
            res.status(400).json({ message: 'error occured' });
        })
    }
}