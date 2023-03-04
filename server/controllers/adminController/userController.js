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
         const { _id } = req.params;
         users.updateOne({ _id }, [{ "$set": { "blockStatus": { "$eq": [false, "$blockStatus"] } } }]).then(response => {
            res.sendStatus(200);
        }).catch(err=>{
            console.log(err.message)
            res.status(400).json({ message: 'error occured', err: err.message })
        })
    },
    

}