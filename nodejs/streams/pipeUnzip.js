var fs = require('fs');  
var zlip = require('zlib');

var readerStream = fs.createReadStream('comments.zlib.tz');  
var writerStream = fs.createWriteStream('commentunzipped.txt');  


readerStream
    .pipe(zlip.createGunzip())
    .pipe(writerStream);  



