const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema(
    {
        lat: {
            type: String,
            require: true
        },
        long: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Location', locationSchema)
