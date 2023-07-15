const port = 4001
const io = require('socket.io')(port)
const uuid = require('uuid').v4


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

let queue = {
     flights : {}
}
io.on('connection' , socket =>{
     // console.log('soket id is : ',socket.id);

     socket.on('controls' , (payload) =>{
     setInterval(() =>{
          let id = uuid()
          io.emit('newFlight' , id )
          queue.flights[id] = payload
          console.log('newFlight' , queue); 
     },10000)
     })

})

const airline = io.of('/airline')

airline.on('connection' , (socket) =>{

          setInterval(() =>{
               socket.emit('pilot' , queue )
          },10000)

     socket.on('get-all' , () =>{

          socket.on("took-off" ,(payload) =>{
               console.log('took_off',payload);
          })
          
          socket.on('Arrived' , (payload) =>{
               console.log('Arrived',payload);
               io.emit('thanks' , payload)


               let dele = Object.keys(payload.flights).shift()
               
               delete queue.flights[dele]
          })

     })
})

