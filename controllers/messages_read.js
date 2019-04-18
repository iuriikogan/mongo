const db_message = require('../models/message')

module.exports = function(req, res, next) {
	let query = {};
	if (req.query.channel) {
		query = {"channel": req.query.channel}
	}
	console.log(query)
	db_message
	.find({"channel": req.query.channel})
	.populate({
		path: 'channel',
		select: 'name'
	})
	.then(function(message) {
		console.log(message);
		res.status(200).json(message)
	})
}
