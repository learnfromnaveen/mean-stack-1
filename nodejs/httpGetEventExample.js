
var http  = require('http');  
var events   = require('events');  
var fs  = require('fs');  

var eventEmitter = new events.EventEmitter(); 
eventEmitter.on('onGetRequest', ( request, response) => { 
    fs.readFile('files/eventEmitter.txt', (error, data)=>{
        eventEmitter.emit('onEndRequest', response, data);
    });
});


eventEmitter.on('onEndRequest', (response, data) => { 
    response.writeHead(200, { 'Content-Type': 'text/plain'}); 
    response.end(data.toString());
});


http.createServer((request, response)=>{

    if(request.method.toLocaleLowerCase() === 'get'){ 
        eventEmitter.emit('onGetRequest', request, response);
    }

}).listen(3031);

console.log("Server starte and listening at port: 3031");  