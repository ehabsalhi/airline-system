const  io  = require('socket.io-client')
const port = 4001
const host = `http://localhost:${port}/airline`
const socket = io.connect(host)


socket.on("pilot" ,(payload) =>{
     
     let dele = Object.keys(payload.flights).shift()
     // socket.emit('get-all' ,payload )

          setTimeout(() =>{
               
               console.log(`Pilot:Sorry i didn't catch this flight ID : ${dele} `);
               console.log(`Pilot: flight with ID ${dele} took-off`);
               socket.emit('took-off' , payload , dele)
          } , 4000)
          setTimeout(() =>{
               console.log(`Pilot: flight with ID ${dele} Arrived`);
               socket.emit('Arrived' , payload , dele)
          
          },7000)

})



