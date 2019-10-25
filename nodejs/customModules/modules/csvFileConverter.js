var os  = require('os'); 

function CSVFileConverter(data){
    
    const FileTypes  =  { 
        jsonArray : true,  
        json: true
    }

    const DELIMITER  = ",";

    this.convert = (data, fileType, callback) =>{
        
        var csvData = ''; 

        if(!callback) return;  

        if(!FileTypes[fileType]) return;  

        if(Array.isArray(data) && data.length > 0){ 
            
            var header  = extractHeaders(data[0]);
            
            csvData += header.headers + os.EOL;  

            csvData += extractDataFromArray(data, header.keys);

            callback({ 
                success: true
                , data: csvData
            })

        }else if(data){ 
            //TODO 
        }

 
    } 

    var extractHeaders =  (data) =>{ 

        var keys  = Object.keys(data);  
        
        return { 
            keys: keys,  
            headers : keys.join(DELIMITER)
        }
    }


    var extractDataFromArray = (data, keys) =>{ 
      
        var records = '';
      
        data.forEach(d => {
            records += makeCsvData(d, keys) + os.EOL;
        });

        return records;
    }

    var makeCsvData = (object, keys) => { 

        var values  = [];  

        keys.forEach(k => { 
            values.push(object[k]);
        })

        return values.join(DELIMITER);
    }
}

module.exports = CSVFileConverter;