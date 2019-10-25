var path = require("path")

var configuration  = { 

    apiRoot: 'https://ww.api.com'

}


var action = "edit";  

console.log( path.join(configuration.apiRoot, action));

console.log('resolve : ' + path.resolve('osModule.js'));

console.log('extension : ' + path.extname('osModule.js'));

