const port = 4001
const io = require('socket.io')(port)

let obj = {
     event: 'new-flight',
     time: new Date(),
     Details: {
     airLine: 'Royal Jordanian Airlines',
     destination: 'Manchester, UK',
     pilot: 'Jane doe',
     flightID: 'ds7g86sa8v87dsv60v876d'
 }
}

io.on('connection' , socket =>{
     console.log('soket id is : ',socket.id);

     socket.on('controls' , (payload) =>{
     setInterval(() =>{
          io.emit('newFlight' , payload )
          console.log(`Flight : ` , payload); 
     },10000)
     })
})

const airline = io.of('/airline')

airline.on('connection' , (socket) =>{
     console.log('from airline');
     setInterval(() =>{
          socket.emit('pilot' , obj )
     },10000)

     socket.on("took-off" ,(payload) =>{
          payload.event = 'took_off'
          console.log('Flight : ' , payload);
     })
     
     socket.on('Arrived' , (payload) =>{
          payload.event = 'Arrived'
          console.log('Flight : ' , payload);
          io.emit('thanks' , payload)
     })
})

