const mongoose = require('mongoose')
const review = mongoose.Schema({
    taskprovider: {
        type: String,
        required: true
    },
    taskworker: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }

})
module.exports = mongoose.model('review', review)
