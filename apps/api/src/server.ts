import { app } from "./app";
import { databaseURL, port } from "./config";
import { initSocketServer } from "./sockets";

const { io, server } = initSocketServer(app);

const listen = () => {
  return new Promise<void>((resolve, reject) =>
    server.listen(port, () => {
      return resolve();
    })
  );
};

listen().then(() =>
  // tslint:disable-next-line:no-console
  console.info(
    `Listening on http://localhost:${port}.`,
    `Press CTRL-C to stop\n`
  )
);

io.on("connection", (socket) => {
  socket.emit("user", {
    user: socket.rooms.values().next().value,
  });

  socket.on("init-call", (arg) => {
    console.log("init-call", arg);
    socket.broadcast.emit("call-initiated", {
      callerId: arg,
      offer: arg.offer,
    });
  });

  socket.on("call-accepted", (arg) => {
    socket.emit("call-accepted", {
      userId: arg,
    });
  });

  socket.on("media-stream-success", (arg) => {});

  socket.on("create-local-peer", (arg) => {
    console.log("create-local-peer", arg?.localPeer);
  });

  socket.on("received-offer", (arg) => {
    socket.emit("offer-received", {
      user: socket.rooms.values().next().value,
      offer: arg,
    });
  });

  socket.on("answer-created", (arg) => {
    socket.broadcast.emit("answer-received", {
      answer: arg,
    });
  });

  socket.on("negotiation-needed", (arg) => {
    socket.emit("negotiation-completed", {
      ...arg,
    });
  });

  socket.on("new-ice-candidate", (arg) => {
    console.log(arg.candidate);
    socket.broadcast.emit("ice-candidate-received", {
      ...arg.candidate,
    });
  });
});
