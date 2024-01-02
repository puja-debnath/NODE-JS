const http = require("http")
const fs = require("fs")
const express = require("express")
const path = reuqire("path")

const app = express()

//here express is a middleware, so it will always used with app.use /also to read static data statici used
app.use(express.static(path.join(path.resolve(),"public")))

app.set("view engine", "ejs")
app.get("/",(req,res) =>{
  res.render("index",{name:"pujaaa"})
  // res.send("wghats up brooooo")
  // res.statusCode(400).send("meri marzi")
  // res.sendFile("./index.html")
  // const pathlocation = path.resolve()  // it gives the current path
  // res.sendFile(path.join(pathlocation,"./index.html"))
  // res.json({
  //   success:true,
  //   products: [],
  // })
})


// const server = http.createServer((req,res) => {
//   if(req.url === "/about"){
//     res.end("<h1> about page <h1>")
//   }

//  else if(req.url === "/"){
//         fs.readFileSync("./index.txt",(err,data) =>{
//           res.end(data)
//         })
//   }
// else  if(req.url === "/contact"){
//     res.end("<h1> contact page <h1>")
//   }
//   else{
//     res.end("<h1> page not found <h1>")

//   }

// })

server.listen(3090,() => {
    console.log("server is started")
})