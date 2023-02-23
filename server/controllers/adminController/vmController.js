const vms = require('../../models/vmModel')

module.exports = {
    getVms: async (req,res) => {
        vms.find().then(vmsDatas => {
            res.status(200).json({ vmsDatas })
        })
    },
    blockVm: async (req, res) => {
        const { _id } = req.params;
        await vms.updateOne({ _id }, [{ "$set": { "blockStatus": { "$eq": [false, "$blockStatus"] } } }]).then(response => {
            res.sendStatus(200);
        })
    },
    approve: async (req,res)=> {
        console.log(
            'hey'
        );
        const { _id } = req.params;
        await vms.updateOne({ _id },{ "$set": { approved:true} } ).then(response => {
            console.log(response)
            res.sendStatus(200);
        })
        
    },
    deleteVm: async (req,res) => {
        const { _id } = req.params;
        await vms.deleteOne({_id}).then(response=>{
            console.log(response);
            res.sendStatus(204); //resource deleted successully
        })
    }
}