/* eslint-disable import/no-anonymous-default-export */
import io from 'socket.io-client';

let socket;

export const sendSocketMessage = (name, payload) => {
    if (socket) {
        socket.emit(name, payload);
    }
};

export default ({ children, action, setId, setToastMessage }) => {

    if (!socket) {
        socket = io.connect('http://localhost:8080/', { transports: ['websocket'] });
        socket.on('connect', () => {
            setId(socket.id);
            // Connected True
            socket.on('disconnect', (reason) => {
                if (reason === 'io server disconnect') {
                    socket.connect();
                }
            });
        });

        socket.on('sendMessageComplete', (arg) => {
            if (socket.id !== arg.socketId) {
                action(msg => ([...msg, arg]));
            }
        })

        socket.on('notification', (msg) => {
            setToastMessage(msg)
        })

        // socket.on('connect_error', () => {
        //     // Connected false
        // });

        // socket.on('connect_timeout', () => {
        //     // Connected false
        // });

        // socket.on('error', (error) => {
        //     if (error === 'authentication error') {
        //         socket.disconnect();
        //         // Auth Error 
        //     }
        //     else if (error === 'Internal server error') {
        //         socket.disconnect();
        //         // Error 
        //     } else {
        //         // Connected false
        //     }
        // });

        // socket.on('reconnect', () => {
        //     // Connected false
        // });

        // socket.on('reconnect_attempt', () => {
        //     // Connected false
        // });

        // socket.on('reconnecting', () => {
        //     // Connected false
        // });

        // socket.on('reconnect_error', () => {
        //     // Connected false
        // });


        // socket.on('reconnect_failed', () => {
        //     // Connected false
        // });
    }

    return children;
};