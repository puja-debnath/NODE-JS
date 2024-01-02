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
 
})




server.listen(3090,() => {
    console.log("server is started")
})