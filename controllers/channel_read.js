// Import db_channel
const db_channel = require('../models/channel')

module.exports = function(req, res, next) {
	db_channel.findOne({"name" : req.params.name}).then(function(channels) {
		console.log(channels);
	})
}
