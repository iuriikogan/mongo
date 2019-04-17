const express = require('express')
const body_parser = require('body-parser')

const app = express()

// middleware

app.use(body_parser.json())

require('./routes')(app);

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






		// at the end
app.listen(process.env.PORT || 3000, function() {
	console.log('Server ready on port 3000 or default');
})
