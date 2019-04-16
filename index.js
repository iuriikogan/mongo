const express = require('express')
const body_parser = require('body-parser')

const app = express()

// middleware

app.use(body_parser.json())

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

// app.get('/channels', function(req, res, next) {
// 	let channels = [{
// 		id: 1,
// 		name: 'general'
// 	}, {
// 		id: 2,
// 		name: 'random'
// 	}, {
// 		id: 3,
// 		name: 'private'
// 	}, {
// 		id: 4,
// 		name: 'fun'
// 	}]
// 	res.json(channels)
// })

app.get('/channels', require('./controllers/channels_read'))

app.get('/channels/:name', require('./controllers/channel_read'))

app.post('/channels', require('./controllers/channel_create'))

app.delete('/channels/:name', require('./controllers/channel_delete'))

app.patch('/channels/:name', require('./controllers/channel_update'))

// app.get('/channels/:id', function(req, res, next) {
// 	console.log('You\'re looking for channel: ' + req.params.id);
// 	let channels = [{
// 		id: 1,
// 		name: 'general'
// 	}, {
// 		id: 2,
// 		name: 'random'
// 	}, {
// 		id: 3,
// 		name: 'private'
// 	}, {
// 		id: 4,
// 		name: 'fun'
// 	}]
// 	let channel = channels.find(function(c) {
// 		return c.id == req.params.id
// 	})
// 	res.json(channel)
// })

// app.post('/channels', function(req, res, next) {
// 	console.log('Thank you for your POST request at /channels');
// 	console.log('The new channel is' + req.body);
// 	let channels = [{
// 		id: 1,
// 		name: 'general'
// 	}, {
// 		id: 2,
// 		name: 'random'
// 	}, {
// 		id: 3,
// 		name: 'private'
// 	}, {
// 		id: 4,
// 		name: 'fun'
// 	}]
// 	channels.push(req.body)
// 	res.json(channels)
// })

app.listen(process.env.PORT || 3000, function() {
	console.log('Server ready on port 3000 or default');
})
