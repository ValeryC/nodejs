
// module who get called
const http = require("http")
const url = require("url")

//function start,  has on argument a function route get called on router.js
const start =(route) =>{
//function on request on argument a request and a response. excute only the user go on localhost    
const onRequest = (req, res) => {
//define a path name with parse  you ask the server  a url    
    const pathname = url.parse(req.url).pathname
// response of the server
    console.log("request received for pathname"+pathname)
//function excute from router.js 
    route(pathname)
//response of the server
    console.log("request received")
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Hello World")
    }
 // ask to listen on local to the server   
http.createServer(onRequest).listen(3000)
console.log("start server on localhost:3000")
}
//export to read on index.js
exports.start = start
