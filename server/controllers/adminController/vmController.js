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
            console.log(response)
            res.sendStatus(200);
        })
    }
}