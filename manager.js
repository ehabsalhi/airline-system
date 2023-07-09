const eventPool = require("./event");
require('./pilot')
require('./system')

// let obj = {
//      event: 'new-flight',
//      time: new Date(),
//      Details: {
//      airLine: 'Royal Jordanian Airlines',
//      destination: 'Manchester, UK',
//      pilot: 'Jane doe',
//      flightID: 'ds7g86sa8v87dsv60v876d'
//  }
// }




eventPool.on('newFlight' , (payload) =>{
     console.log(`Manager : new flight with ID : ${payload.Details.flightID} has been scheduled.`); 
     console.log(`Flight : ` , payload); 
})



// setInterval(() =>{
//      obj.event = 'new-flight'
//      eventPool.emit('newFlight' , obj )
//      eventPool.emit('pilot' , obj )
// },10000)