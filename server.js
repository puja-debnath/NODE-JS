const http = require("http")
const letpath = require("path")
const fs = require("fs")
const fsPromises = require("fs").promises
const PORT = process.env.PORT || 3500

const logEvents = require("./logEvents")
const EventEmitter = require("events")
class Emitter extends EventEmitter{}
const myEmitter = new Emitter()

const server = http.createServer((req,res) =>{
    console.log(req.url, req.method)
    let path;

    if(req.url === "/" || req.url === "index.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type" ,"Text/html")
        path = path.join(__dirname,"views","index.html")
        fs.readFile(path,"utf8",(req,data) =>{
            res.end(data)
        })
    }
})

server.listen(PORT, () =>{
    console.log(`server runnning on ${PORT}`)
})