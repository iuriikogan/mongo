const db_user = require('../models/user')

module.exports = function(req, res, next) {
	db_user.create(req.body).then(function(new_user) {
		console.log(new_user);
		res.json(new_user)
	})
}
