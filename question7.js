nodeschool - http-client problem:

var http = require("http");

http.get(process.argv[2], function(res) {
 // console.log("Got response: " + res.statusCode);
 res.setEncoding('utf8');
 res.on("data", function (data) {
   console.log(data);
 });

}).on('error', function(e) {
 console.log("Got error: " + e.message);
});

