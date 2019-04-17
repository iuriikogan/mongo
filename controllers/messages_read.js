const db_message = require('../models/message')

module.exports = function(req, res, next) {
	db_message
	.find({})
	.select({
		content: 1,
		name: 1
	})
	.then(function(message) {
		console.log(message);
		res.status(200).json(message)
	})
	
}
