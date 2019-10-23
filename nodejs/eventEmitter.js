//1. Refer package  'events

var events  = require('events'); 

//2. Create intance of EventEmitter  

var eventEmitter = new events.EventEmitter();  

//3. Register the event  

eventEmitter.on('myevent', () =>{ 
    console.log('Trigger myevent....');  
}); 


//4. Invoke an event  

eventEmitter.emit('myevent');