var http = require("http");
var onReceiveRequest = function (req, res) {
    console.log("request is received..");
    res.write("This is the trial web page");
    res.end();
}
console.log("listening")

var server = http.createServer(onReceiveRequest)
server.listen(8080)