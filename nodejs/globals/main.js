process.on('beforeExit', function(code) {
    // Following code will never execute.
    console.log('before exit');
 });
 

process.on('exit', function(code) {
    // Following code will never execute.
    setTimeout(function() {
       console.log("This will not run");
    }, 0);
   
    console.log('About to exit with code:', code);
 });

 console.log("Program Ended");