var path = require('path');  

var FileHelper = require('./modules/fileHelper');

var CsvFileConverter = require('./modules/csvFileConverter');

var fileHelper  = new FileHelper();

var csvFileConverter = new CsvFileConverter();  

var inputFilePath =  path.join(__dirname, 'files', 'comments.json');

var outputFilePath =  path.join(__dirname, 'files', 'output.csv');


fileHelper.readFile(inputFilePath, (response) => { 

    if( response.success) { 

        csvFileConverter.convert(JSON.parse(response.data),  'jsonArray', ( result )=> { 

            if(result.success){ 

                fileHelper.writeFile(outputFilePath, result.data);

            }
        })
    
     }

});
