const db = require('../db')

const mongoose = require('mongoose')

let schema = mongoose.Schema

let ObjectId = schema.Types.ObjectId

const db_message = db.model('message', {
    __v: {
        type: Number,
        select: false
    },
    channel: {
        type:  String,
        select: false
    },
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    channel:
    {
        type: ObjectId,
        ref: "channel",
        required: [true, "Channel is Required."]
    }
})


module.exports = db_message