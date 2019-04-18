const db_user = require('../models/user')

module.exports = function(req, res, next) {
	db_user
	.findOne(req.params.name)
	.then(function(user) {
		res.status(200).json(user)
		})
	}