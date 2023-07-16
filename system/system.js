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
          // console.log('newFlight' , queue.flights[id]); 
     },10000)
     })

})

const airline = io.of('/airline')

airline.on('connection' , (socket) =>{

          setInterval(() =>{
               socket.emit('pilot' , queue )
          },10000)

     // socket.on('get-all' , () =>{

          socket.on("took-off" ,(payload , id) =>{
               console.log('took_off',id ,payload.flights[id]);
          })
          
          socket.on('Arrived' , (payload, id) =>{
               console.log('Arrived', id,payload.flights[id]);
               let pilot = payload.flights[id].Details.pilot
               io.emit('thanks' ,pilot)

               let dele = Object.keys(payload.flights).shift()
               
               delete queue.flights[dele]
          })

     // })
})

