const vms = require('../../models/vms.model');
const bcrypt = require('bcrypt');
require('dotenv/config');
const jwt = require('jsonwebtoken')


module.exports = {
    signin: async (req, res) => {
        const { mobile, password } = req.body
        if (!mobile || !password) return res.status(400).json({ 'message': 'mobile number and password required.' });
        else {
            //checking user exist with his mobile
            try {

                const foundUser = await vms.findOne({ mobile })

                if (foundUser && (await bcrypt.compare(password, foundUser.password))) {

                    if (foundUser.approved) {
                        if (foundUser.blockStatus) {
                            res.status(403).json({ message: 'blocked' }) //refuse to authorize it
                        } else {
                            const accessToken = jwt.sign({ id: foundUser._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                            res.status(200).json({ accessToken, name: foundUser.name, mobile: foundUser.mobile });
                        }
                    } else {
                        res.status(406).json({ message: "Admin Not approved yet" });
                    }

                    //checking user blocked
                } else {
                    res.status(401).json({ message: 'invalid mobile or password' }) // unauthorized
                }
            } catch (error) {
                console.log(error.message)
                res.status(400).json({ message: 'error occured', err: error.message })
            }
        }
    }
}