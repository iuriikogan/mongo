const db_message = require('../models/message')

module.exports = function(req, res, next) {
	db_message.findOneAndUpdate(
		{
			"_id" : req.params.id
		},
		{
			"content" : req.body
		},
		{
			new: true
		}).then(function(updated_message) {
		console.log(updated_message);
		res.json(updated_message)
	})
}
