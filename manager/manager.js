const  io  = require('socket.io-client')
const port = 4001
const host = `http://localhost:${port}`
const socket = io.connect(host)


socket.on('newFlight' , (payload) =>{
     console.log(`Manager : new flight with ID : ${payload} has been scheduled.`); 

})

socket.on('thanks' , payload =>{
     console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload}`);

})

