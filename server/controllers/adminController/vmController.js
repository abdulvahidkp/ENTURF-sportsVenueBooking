const vms = require('../../models/vms.model')
const twilio = require('twilio')

const sendMessage = (mobile,status)=> {
    mobile = Number(mobile)
    const accountSid = process.env.accountSid;
    const authToken = process.env.authToken;
    console.log(authToken, '....................', accountSid, '.........................',process.env.myMobile);
    const client = twilio(accountSid, authToken);
    const message = `Enturf Booking  - Your venue manager application has been ${status}.`;
    client.messages
      .create({
        body: message,
        from: process.env.myMobile,
        to: `+91${mobile}`
      })
      .then(message => console.log(message.sid))
      .catch(error =>{
        console.error(error)
        res.status(400).json({message:'error occured at message to vm'})
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
    approve: async (req,res)=> {
        const { _id } = req.params;
        await vms.findByIdAndUpdate(_id,{ "$set": { approved:true} } ).then(response => {
            sendMessage(response.mobile,'approved')
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