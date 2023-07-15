const  io  = require('socket.io-client')
const port = 4001
const host = `http://localhost:${port}/airline`
const socket = io.connect(host)


socket.on("pilot" ,(payload) =>{
     
     socket.emit('get-all' ,payload )
     let dele = Object.keys(payload.flights).shift()
          setTimeout(() =>{
               console.log(`Pilot:Sorry i didn't catch this flight ID : ${dele} `);
               console.log(`Pilot: flight with ID ${dele} took-off`);
               socket.emit('took-off' , payload)
          } , 4000)
          setTimeout(() =>{
               console.log(`Pilot: flight with ID ${dele} Arrived`);
               socket.emit('Arrived' , payload)
          
          },7000)

})



