const db = require('../db')

const mongoose = require('mongoose')

let schema = mongoose.Schema

let ObjectId = schema.Types.ObjectId

const db_user = db.model('users', {
    __v: {
        type: Number,
        select: false
    },
    name: {
        type: String,
        required: true
    },
    status: 
    {
        type: String,
        default: 'Active'
    },
    created:
    {
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports = db_user