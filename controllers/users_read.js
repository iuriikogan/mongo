const db_user = require('../models/user')

module.exports = function(req, res, next) {
	console.log(req.query);
	db_user
	.find({})
	.select({
        created: 0
    })
	.then(function(user) {
		console.log(user);
		res.status(200).json(user)
	})
}
