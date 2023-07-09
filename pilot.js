const eventPool = require("./event");

eventPool.on("pilot" ,(payload) =>{
     setTimeout(() =>{
          console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
          eventPool.emit('took-off' , payload)
     } , 4000)
     setTimeout(() =>{
          console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
          eventPool.emit('Arrived' , payload)
          console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);
     },7000)
})

eventPool.on("took-off" ,(payload) =>{
     payload.event = 'took_off'
     console.log('Flight : ' , payload);
})

eventPool.on('Arrived' , (payload) =>{
     payload.event = 'Arrived'
     console.log('Flight : ' , payload);

})

