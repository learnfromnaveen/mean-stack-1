var path = require('path');  

var FileHelper = require('./modules/fileHelper');

var fileHelper  = new FileHelper();

var inputFilePath =  path.join(__dirname, 'files', 'comments.txt');

var outputFilePath =  path.join(__dirname, 'files', 'output.csv');


fileHelper.readFile(inputFilePath, (response) => { 

    if( response.success) { 
 
        fileHelper.writeFile(outputFilePath, response.data);
    
     }

});







