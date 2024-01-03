const http = require("http")
const path = require("path")
const fs = require("fs")
const fsPromises = require("fs").promises
const PORT = process.env.PORT || 3500

const logEvents = require("./logEvents")
const EventEmitter = require("events")
class Emitter extends EventEmitter{}
const myEmitter = new Emitter()

const server = http.createServer((req,res)=>{
    console.log(req.url , req.method)

    const extension = path.extname(req.url)
  let contentType;
    switch(extension){
        case ".css":
            contentType= "text/css";
            break;
        case ".js":
            contentType= "text/javascript";
            break;
        case ".json":
            contentType= "application/json";
            break;
        case ".jpg":
            contentType= "image/jpeg";
             break;
        case ".png":
            contentType= "image/png";
            break;
         case "txt":
             contentType= "text/plain";
              break;
        default:
             contentType= "text/html";
    }

    let filepath = 
      contentType === "text/html" && req.url=== "/"
      ? path.join(__dirname,"views","index.html")
      :contentType === "text/html" && req.url.slice(-1) === "/"
         ?path.join(__dirname,"views", req.url , "index.html")
         :contentType === "text/html"
              ?path.join(__dirname,"views", req.url)
             :path.join(__dirname,req.url)
    // males .html extension not required fpr browser
    if(!extension && req.url.slice(-1) !== "/" ) filepath += ".html";

    const fileExist = fs.existsSync(filepath)
    if(fileExist){
        //serve the file
    }else{
        //404
       // 301redirect
       console.log(path.parse(filepath))
    }
    
});

server.listen(PORT, () =>{console.log(`server runnning on ${PORT}`)})


