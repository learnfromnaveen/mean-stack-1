//1. refere the fs module  
var fs  = require('fs');  

const sourceFilePath  = __dirname +   "/input.txt";
const targetFilePath  = __dirname +   "/output.txt";  

const encoding = 'UTF8';  
var data = '';  

console.log(__dirname);

function readFile(sourceFile, targetFile, onReadComplete){
    //2. create a read stream 
    var readerStream = fs.createReadStream(sourceFile);  

    //3. set encoding 
    readerStream.setEncoding(encoding);

    //4. register the events 
    readerStream.on('data',  (chunk) => { 
        debugger;
        data += chunk;  
    });

    readerStream.on('error', (error) => { 
        debugger;

        console.log('There was an error while reading file.');
        console.log("Stack trace: ");  
        console.log(error.stack);
    });

    readerStream.on('end',  () => { 
        console.log('finished reading file...'); 
        console.log('writing to file');  

        if(onReadComplete){
            onReadComplete(targetFile, data);
        }
    });
}

function writeToFile(targetFile, data){

    //1. create write stream  
    var writerStream  = fs.createWriteStream(targetFile);

    //1.1 Register the event emitters  

    writerStream.on('finish', ()=>{ 
        console.log('finished writing to file...');
    });

    writerStream.on('error',  (error) =>{ 
        console.log('There was an error while write to file...');  
        console.log('Stack trace:');  
        console.log(error.stack);
    });

    //2. write the data with the encoding format  
    writerStream.write(data, encoding);  

    //3. mark the end of the file  
    writerStream.end();  
}

readFile(sourceFilePath, targetFilePath, writeToFile);

console.log('program ended..');

