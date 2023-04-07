const vms = require('../../models/vms.model')
const twilio = require('twilio')

const sendMessage = (mobile,reason,status)=> {
    mobile = Number(mobile)
    const accountSid = process.env.accountSid;
    const authToken = process.env.authToken;
    const client = twilio(accountSid, authToken);
    const message = `Enturf Booking  - Your venue manager application has been ${status}. ${reason ? `reason : ${reason}` : '' }`;
    client.messages
      .create({
        body: message,
        from: process.env.myMobile,
        to: `+91${mobile}`
      })
      .catch(error =>{
        console.error(error)
      });
}

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
    changeStatus: async (req,res) => {
        const { vmId,status,reason } = req.body;
        await vms.findOneAndUpdate({_id:vmId},{"$set":{status,reason}}).then(async (response)=>{
            sendMessage(response.mobile,reason,status)
            res.sendStatus(200);
        })
    }
}