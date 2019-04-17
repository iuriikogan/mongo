const db_message = require('../models/message')

module.exports = function(req, res, next) {
	db_message
	.findById(req.params.id)
	.populate({
		path: 'channel',
		select: 'name'
	})
	.then(function(message) {
		console.log(message);
		res.status(200).json(message)
		})
	}