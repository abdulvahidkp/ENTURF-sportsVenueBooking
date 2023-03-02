const mongoose = require('mongoose');

const sportsSchema = new mongoose.Schema({
    sport:String,
    facilityDetails:[
        {
            facility:String,
            count:Number,
            status:Boolean
        }
    ]
});

module.exports = mongoose.model('sports',sportsSchema);