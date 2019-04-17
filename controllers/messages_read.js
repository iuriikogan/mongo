const db_message = require('../models/message')

module.exports = function(req, res, next) {
	db_message.find({}).then(function(message) {
		console.log(message);
		res.json(message)
	})
}
