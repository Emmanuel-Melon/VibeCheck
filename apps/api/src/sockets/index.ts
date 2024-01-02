import http from "http";
import { Server } from "socket.io";

export const initSocketServer = (app) => {
    const server = http.createServer(app);
    const io = new Server(server);
    return { io, server };
} 