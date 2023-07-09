const eventPool = require("./event");
require('./pilot')
require('./manager')

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

eventPool.on('controls' , (payload) =>{
     setInterval(() =>{
          payload.event = 'new-flight'
          eventPool.emit('newFlight' , payload )
          eventPool.emit('pilot' , payload )
     },10000)
})

eventPool.emit('controls' , obj)