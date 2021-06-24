
const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 9001;

const router = require('./router');

const app = express();
const options = {
	cors: true,
}

const server = http.createServer(app);
const io = socketio(server, options)

io.on('connection', (socket) => {
	console.log('New connection!')

	socket.on('join', ({name, room}, callback) => {
		console.log(name, room)


	})

	socket.on('disconnect', () => {
		console.log('Connection has left.')
	})
})

app.use(router);

server.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));