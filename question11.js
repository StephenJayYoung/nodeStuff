  var http = require('http')
    var server = http.createServer(process.argv[2],function (request, response) {
      // request handling logic...
    fs.createReadStream(/Users/stephenyoung/Desktop/AllPCS/nodeStuff/question11.js)
    })
    server.listen(8000)


    http.createServer()
    //this takes a callback that is called once for each connection 
    //received by your server. 
  	//The callback function has the signature:
  	// function callback (request, response) { /* ... */ }
  	//the two callbacks:
  	//request - fetches properties
  	//response - sends data to the client, both headers and body

  	fs.createReadStream()
  	//will need to use this to to create a stream representing the file we are
  	//given as a command-line argument. The method returns a stream object
  	//which you can use src.pipe(dst) to pipe the data from the src stream
  	//to the dst stream. In this way you can connect a filesystem stream with
  	//an HTTP response stream