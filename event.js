
const io = require('socket.io-client');
const port = 4001
const host = `http://localhost:${port}`
const socket = io.connect(host)
const uuid = require('uuid').v4


let obj = {
    //  event: 'new-flight',
     time: new Date(),
     Details: {
     airLine: 'Royal Jordanian Airlines',
     destination: 'Manchester, UK',
     pilot: 'Jane doe',
 }
}

socket.emit('controls' , obj)








