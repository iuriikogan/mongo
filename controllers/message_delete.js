const db_message = require('../models/message')

module.exports = function(req, res, next) {
	db_message.findByIdAndRemove(req.params.id).then(function(deleted_message) {
		console.log(deleted_message);
		res.json(deleted_message);
	})
}
