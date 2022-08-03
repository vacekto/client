import { Socket } from "socket.io-client"
import EVENTS from './EVENTS';

const subscribeToEvents = (socket: Socket) => {
    socket.on('search for game', () => {
        
    })
}

export default subscribeToEvents