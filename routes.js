module.exports = function(app) {

        // channels
app.get('/channels', require('./controllers/channels_read'))
app.get('/channels/:name', require('./controllers/channel_read'))
app.post('/channels', require('./controllers/channel_create'))
app.delete('/channels/:name', require('./controllers/channel_delete'))
app.patch('/channels/:name', require('./controllers/channel_update'))

        // messages

app.get('/message', require('./controllers/messages_read'))
app.get('/message/:id', require('./controllers/message_read'))
app.post('/message', require('./controllers/message_create.js'))
app.patch('/message/:id', require('./controllers/message_update'))
app.delete('/message/:id', require('./controllers/message_delete'))
}