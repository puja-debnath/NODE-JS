const express = require("express")
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

  // it will either take only / or can take html now html is optional
 app.get("^/$|/index(.html)?" , (req,res) =>{
   // res.sendFile("./views/index.html",{root: __dirname})
    res.sendFile(path.join(__dirname,"views","index.html"))
 })
 app.get("/new_page.html" , (req,res) =>{
    res.sendFile(path.join(__dirname,"views","new_page.html"))
 })
 app.get("/old_page.html" , (req,res) =>{
   res.redirect(301,"/new_page.html")   // 302 by default 
})

app.get("/hello(.html)?",(req,res,next) =>{
   console.log("request to send heelo world ")
   next()
}, (req,res) =>{
   res.send("hello world!")
})
 
//chaining route handlers
const one = (req,res,next)=>{
  console.log("one")
  next()
}

const two = (req,res,next)=>{
   console.log("two")
   next()
 } 

 const three = (req,res) =>{
   console.log("three")
   res.send("finished")
 }

 app.get("/chain(.html)?",[one,two,three])

app.get("/*" , (req,res) =>{
   //since the 404.html file will be found ot will give statuscode of 200 which not right , 
   //since the file doesnot exist . so we have to set it to 400 manually
   res.status(400).sendFile(path.join(__dirname,"views","/404.html"))   
})

 app.listen(PORT , () => {console.log(`server is running on ${PORT}`)})