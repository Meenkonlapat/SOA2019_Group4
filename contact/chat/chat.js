
module.exports = function(server)
{
    const io = require("socket.io")(server);

    io.on("connection", function(socket){
        console.log(socket.id)
        socket.on("sendMessage", function(data){
            io.emit("message", data);
        });
    });
}