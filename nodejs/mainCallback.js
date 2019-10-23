var fs  = require('fs');  

var filePath  = 'files/input.txt';  
fs.readFile(filePath, (error, data) =>{

        if(error){ 
            console.log('There was an error while reading file');  
            console.log(error);
        }
        else{ 
            console.log(data.toString());
        }
});

console.log('main program ended....');