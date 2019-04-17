const db_user = require('../models/user')

module.exports = function(req, res, next) {
	db_user.findByIdAndUpdate(
		req.params.id,
		{
			"name" : req.body.name,
			"status" : req.body.status
		},
		{
			new: true
		}).then(function(updated_user) {
		console.log(updated_user);
		res.status(200).json(updated_user)
	})
}
