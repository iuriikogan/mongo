const express = require('express')

const app = express()

// code here

app.get('/', function(req, res, next) {
	// res.send('Hello from the server')
	res.send('<h1>Hello from the server</h1>')
})

app.listen(3000, function() {
	console.log('Server ready on port 3000');
})
