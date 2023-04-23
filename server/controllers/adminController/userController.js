const users = require('../../models/users.model')

module.exports = {
    getUsers: (req, res) => {
        users.find().then(userDatas => {
            res.status(200).json({ userDatas })
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    blockUser: (req, res) => {
         if(!req.body._id)  return res.status(400).json({message:'_id - user id field is required'})
         const { _id } = req.body;
         users.updateOne({ _id}, [{ "$set": { "blockStatus": { "$eq": [false, "$blockStatus"] } } }]).then(response => {
            res.sendStatus(200);
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    

}