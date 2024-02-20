
var readyPlayers = 0

exports.listen = (io) =>
{
    io.on('connection', (socket) =>
    {
        console.log(`A user connected`, socket.id);
        socket.on('ready', () =>
        {
            console.log(`User is ready : `, socket.id);
            readyPlayers++;
            console.log(`No of users`, readyPlayers);

            if (readyPlayers % 2 === 0)
            {
                io.emit('startGame', socket.id)
            }

        })

        socket.on('paddleMove', paddleData =>
        {
            socket.broadcast.emit('paddleMove', paddleData)
        })

        socket.on('ballMove', ballData =>
        {
            socket.broadcast.emit('ballMove', ballData)
        })

        socket.on('disconnect', reason =>
        {
            readyPlayers--;
            console.log(`The client ${socket.id} is disconnected dut to ${reason}`);


        })

    })

}