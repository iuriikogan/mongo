module.exports = function(app) {

        // channels
app.get('/channels', require('./controllers/channels_read'))
app.get('/channels/:name', require('./controllers/channel_read'))
app.post('/channels', require('./controllers/channel_create'))
app.delete('/channels/:name', require('./controllers/channel_delete'))
app.patch('/channels/:name', require('./controllers/channel_update'))

        // messages

app.get('/messages', require('./controllers/messages_read'))
app.get('/messages/:id', require('./controllers/message_read'))
app.post('/messages', require('./controllers/message_create.js'))
app.patch('/messages/:id', require('./controllers/message_update'))
app.delete('/messages/:id', require('./controllers/message_delete'))

app.get('/users', require('./controllers/users_read'))
app.get('/users/:id', require('./controllers/user_read'))
app.post('/users', require('./controllers/user_create.js'))
app.patch('/users/:id', require('./controllers/user_update'))
app.delete('/users/:id', require('./controllers/user_delete'))
}