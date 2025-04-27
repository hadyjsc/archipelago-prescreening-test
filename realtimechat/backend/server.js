const dayjs = require('dayjs');
var localizedFormat = require("dayjs/plugin/localizedFormat");
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

dayjs.extend(localizedFormat);
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

/**
 * Constants for socket paths
 */
const SOCKET_PATH_REGISTER = 'REGISTER'
const SOCKET_PATH_SENT = 'SENT'
const SOCKET_PATH_RECEIVED = 'RECEIVED'
const SOCKET_PATH_TYPING = 'TYPING'
const users = {};

/**
 * Socket.io event handlers
 */
io.on('connection', (socket) => {
    /**
     * Register a user
     * @param {string} username - The username of the user
     * @description This event is emitted when a user registers. It stores the user's socket ID in the users object.
     */
    socket.on(SOCKET_PATH_REGISTER, (username) => {
        users[username] = socket.id; 
    });

    /**
     * Send a typing event
     * @param {string} sender - The username of the sender
     * @description This event is emitted when a user is typing. It broadcasts the typing event to all other users.
     */
    socket.on(SOCKET_PATH_TYPING, (data) => {
        const { sender } = data;
        socket.broadcast.emit(SOCKET_PATH_TYPING, { sender });
    });

    /**
     * Send a message
     * @param {string} message - The message to be sent
     * @param {string} sender - The username of the sender
     * @description This event is emitted when a user sends a message. It broadcasts the message to all other users.
     */
    socket.on(SOCKET_PATH_SENT, (data) => {
        const { message, sender } = data;
        const created = dayjs(new Date()).format('LLLL');
        io.emit(SOCKET_PATH_RECEIVED, { message, sender, createdAt: created });
    });

    /**
     * Handle user disconnection
     * @description This event is emitted when a user disconnects. It removes the user from the users object.
     */
    socket.on('disconnect', () => {
        console.log('A user disconnected');

        const disconnectedUser = Object.keys(users).find((key) => users[key] === socket.id);
        if (disconnectedUser) {
            delete users[disconnectedUser];
        }
    });
});

server.listen(9000, () => {
    console.log('Server running on port 9000');
});