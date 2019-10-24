var fs = require('fs');  
var zlip = require('zlib');

var readerStream = fs.createReadStream('comments.txt');  
var writerStream = fs.createWriteStream('comments.zlib.tz');  




readerStream
    .pipe(zlip.createGzip())
    .pipe(writerStream);  



