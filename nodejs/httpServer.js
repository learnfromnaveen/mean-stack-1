var http = require('http');  

const PORT_NUMBER  = 3030;

http.createServer((request, response)=>{
    //where you have to send the data ?   
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`<h2>Welcome to NodeJS http server</h2>
    <h3>!!!!</h3>`);
}).listen(PORT_NUMBER);

console.log('server has started at port number ', PORT_NUMBER);
