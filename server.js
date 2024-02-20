const app = require('./app')
const port = 4040
const http = require('http')
const socketIo = require('socket.io')
const { listen } = require('./sockets')

const server = http.createServer(app)
const io = socketIo(server)

server.listen(port, () =>
{
    console.log(`Server is up on port ${port}!`);
})

listen(io)
