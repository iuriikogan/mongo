const db = require('../db')

const mongoose = require('mongoose')

const db_message = db.model('message', {
	name: {
		type: String,
        required: true
    },
    content: {
       type: String,
       required: true
    },
    likes: {
        type: Number,
    }
})


module.exports = db_message
