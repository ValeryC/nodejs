
const http = require("http")
const url = require("url")


const start =(route) =>{
const onRequest = (req, res) => {
    const pathname = url.parse(req.url).pathname
    console.log("request received for pathname"+pathname)
    route(pathname)
    console.log("request received")
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Hello World")
    }
http.createServer(onRequest).listen(3000)
console.log("start server on localhost:3000")
}

exports.start = start
