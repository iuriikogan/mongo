// Import db_channel
const db_channel = require('../models/channel')

module.exports = function(req, res, next) {
	db_channel.deleteOne({"name" : req.params.name}).then(function(deleted_channel) {
		console.log(deleted_channel);
	})
}
