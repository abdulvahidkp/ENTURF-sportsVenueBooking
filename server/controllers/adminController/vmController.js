const vms = require('../../models/vms.model')

module.exports = {
    getVms: async (req,res) => {
        vms.find().then(vmsDatas => {
            res.status(200).json({ vmsDatas })
        }).catch(err=>{
            console.log(err.message);
            res.status(400).json({message:'error occured'})
        })
    },
    blockVm: async (req, res) => {
        const { _id } = req.params;
        await vms.updateOne({ _id }, [{ "$set": { "blockStatus": { "$eq": [false, "$blockStatus"] } } }]).then(response => {
            res.sendStatus(200);
        }).catch(err=>{
            console.log(err.message);
            res.status(400).json({message:'error occured'})
        })
    },
    approve: async (req,res)=> {
        const { _id } = req.params;
        await vms.updateOne({ _id },{ "$set": { approved:true} } ).then(response => {
            console.log(response)
            res.sendStatus(200);
        }).catch(err=>{
            console.log(err.message);
            res.status(400).json({message:'error occured'})
        })
        
    },
    deleteVm: async (req,res) => {
        const { _id } = req.params;
        await vms.deleteOne({_id}).then(response=>{
            console.log(response);
            res.sendStatus(204); //resource deleted successully
        }).catch(err=>{
            console.log(err.message);
            res.status(400).json({message:'error occured'})
        })
    }
}