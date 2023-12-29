const http = require("http")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs").promises
const PORT = process.env.PORT || 3500

const logEvents = require("./logEvents")
const EventEmitter = require("events")
class Emitter extends EventEmitter{}
const myEmitter = new Emitter()

const server = http.createServer((req,res) =>{
    console.log(req.url, req.method)
    let letpath;
    switch(req.url){
        case"/" :
        res.statusCode =200
        path = path.join(__dirname,"views","index.html")
        fs.readFile(path,"utf8",(err,data) =>{
           res.end(data)
        })
        break;
    }
})


server.listen(PORT, () =>{
    console.log(`server runnning on ${PORT}`)
})