const users = require('../../models/usersModel')

module.exports = {
        getUsers: async (req, res) => {
        users.find().then(userDatas => {
            console.log(userDatas)
            res.status(200).json({ userDatas })
        })
    },
    blockUser: async (req, res) => {
        await users.updateOne({ _id: req.body.userId }, [{ "$set": { "blockStatus": { "$eq": [false, "$blockStatus"] } } }]);
        res.sendStatus(200)
    }
}