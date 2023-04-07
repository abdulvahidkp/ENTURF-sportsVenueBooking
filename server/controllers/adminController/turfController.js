const turfs = require('../../models/turf.model')

module.exports = {
    getTurf: (req, res) => {
            turfs.find().populate('vmId').then(response => {
                res.status(200).json({ response });
            }).catch(err=>{
                console.log(err.message)
                res.status(400).json({ message: 'error occured', err: err.message })
            })
    },
    approve: async (req, res) => {
        const { id } = req.body;
            turfs.updateOne({ _id:id }, { "$set": { approved: true } }).then(response=>{
                res.status(200).json({message:'approved successfully'});
            }).catch(err=>{
                console.log(err.message);
                res.status(400).json({message:'error occured'});
            })
    },
    deleteTurf: async (req, res) => {
        turfs.findByIdAndDelete(req.params.id).then(response => {
            res.status(200).json({ message: 'turf deleted successfully' });
        }).catch(err => {
            console.log(err.message);
            res.status(400).json({ message: 'error occured' });
        })
    },
    changeBlock: async (req, res) => {
        const { id } = req.body;
        await turfs.updateOne({ _id:id }, [{ "$set": { "isBlocked": { "$eq": [false, "$isBlocked"] } } }]).then(response => {
            res.sendStatus(200);
        }).catch(err=>{
            console.log(err.message);
            res.status(400).json({message:'error occured'})
        })
    },
    getPerTurf: async (req,res) => {
        const {_id} = req.params
        await turfs.findOne({_id}).populate('vmId').then(response=>{
            res.status(200).json(response)
        }).catch(err=>{
            console.log(err.message);
            res.status(400).json({message:'error occured at getting a turf'})
        })
    }
}