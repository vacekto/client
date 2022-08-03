import io, { Socket } from 'socket.io-client'
import subscribeToEvents from './eventListeners';

const socketSingleton = (() => {
    let instance: Socket
    return {
        get instance() {
            if (instance) return instance
            instance = io('http://localhost:3001')
            subscribeToEvents(instance)
            return instance
        }

    }
})()

export default socketSingleton