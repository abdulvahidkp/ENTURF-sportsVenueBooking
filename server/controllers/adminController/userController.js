const users = require('../../models/users.model')

module.exports = {
    getUsers: async (req, res) => {
        users.find().then(userDatas => {
            res.status(200).json({ userDatas })
        })
    },
    blockUser: async (req, res) => {
        const { _id } = req.params;
        await users.updateOne({ _id }, [{ "$set": { "blockStatus": { "$eq": [false, "$blockStatus"] } } }]).then(response => {
            res.sendStatus(200);
        })
    },
    

}