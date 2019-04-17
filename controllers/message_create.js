const db_message = require('../models/message')

module.exports = function(req, res, next) {
	db_message.create(req.body).then(function(new_message) {
		console.log(req.params._id);
		res.json(new_message)
	})
}
