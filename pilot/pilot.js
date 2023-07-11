const  io  = require('socket.io-client')
const port = 4001
const host = `http://localhost:${port}/airline`
const socket = io.connect(host)


socket.on("pilot" ,(payload) =>{
     setTimeout(() =>{
          console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
          socket.emit('took-off' , payload)
     } , 4000)
     setTimeout(() =>{
          console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
          socket.emit('Arrived' , payload)
     },7000)
})



