// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

// Create schema for channel
const db_channel = db.model('channel', {
	name: {
		type: String,
		required: true
	}
})

// Export
module.exports = db_channel
