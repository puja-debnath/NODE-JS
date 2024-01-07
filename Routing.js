const express = require("express")
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const cors = require("cors")
const {logger} = require("./middleware/logEvents")

//built-in middleware to handle urlencoded data
// in other words to ,form-data
//content-Type:application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}))
 
// built-inmiddleware for json
app.use(express.json())

//serve static file
app.use(express.static(path.join(__dirname,"/public")))


                  //custom middleware logger
app.use(logger)
 //live server always run on http you default computer setting[2]
const whiteList = ['https://www.google.com','http://127.0.0.1:5500','http://localhost:3000']
const corsOptions = {
   origin:(origin,callback) =>{
      if(whiteList.indexOf(origin) !== -1 || !origin){
         callback(null,true)
      }else{
         callback(new Error("Not allowed By CORS"))
      }
   },
   optionsSuccessStatus:200
}

app.use(cors(corsOptions))


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

app.use()
 app.listen(PORT , () => {console.log(`server is running on ${PORT}`)})