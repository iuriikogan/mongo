const db_message = require('../models/message')

module.exports = function(req, res, next) {
	db_message.findByIdAndUpdate(
		{
			"content" : req.body.content,
			"likes" : req.body.likes
		},
		{
			new: true
		}).then(function(updated_message) {
		console.log(updated_message);
		res.json(updated_message)
	})
}
