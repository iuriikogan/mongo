const express = require('express')

const app = express()

// code here

app.get('/', function(req, res, next) {
	// res.send('Hello from the server')
	res.send('<h1>Hello from the server</h1>')
})

app.get('/about', function(req, res, next) {
	res.send('<h1>About us</h1>')
})

app.get('/contact', function(req, res, next) {
	res.sendFile(__dirname + '/contact.html')
})

app.get('/file', function(req, res, next) {
	res.download(__dirname + '/notes.txt')
})

app.listen(3000, function() {
	console.log('Server ready on port 3000');
})
