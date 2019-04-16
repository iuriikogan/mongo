// Import db_channel
const db_channel = require('../models/channel')

module.exports = function(req, res, next) {
	db_channel.updateOne({"name" : req.params.name}, {"name": req.body.name}).then(function(updated_channel) {
		console.log(updated_channel);
		res.json(updated_channel)
	})
}
