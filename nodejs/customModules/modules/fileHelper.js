var fs  = require('fs'); 


function FileHelper() { 
    
    const ENCODING =  "UTF8";
    
    this.readFile = function(filePath, callback){ 
        
        var readerStream  = fs.createReadStream(filePath);
        
        var data = '';
        
        readerStream.setEncoding(ENCODING); 

        readerStream.on('data', (chunk) => {
            data += chunk;
        });

        readerStream.on('end', () => {
           if(callback){ 
               callback({
                   success: true,  
                   data: data
               });
           }
        });

        readerStream.on('error', (error) => {
            if(callback){ 
                callback({
                    success: false,  
                    error: error
                })
            }
        });
    };  
    
    this.writeFile = function(filePath, data){

        var writerStream   = fs.createWriteStream(filePath, ENCODING);  
       
        writerStream.write(data);  
    }; 
   
}


module.exports = FileHelper;