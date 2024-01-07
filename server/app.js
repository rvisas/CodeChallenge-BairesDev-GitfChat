const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("sendMessage", (message) => {
    io.emit("broadcastMessage", message);
  });
});

http.listen(5000, () => {
  console.log("Listening on port 5000");
});
