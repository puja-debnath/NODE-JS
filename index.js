const fs = require("fs").promises
const path = require("path")
const file = require("fs")
// fs.readFile(path.join(__dirname,"files","lorem.text"),"utf8",(err,data) =>{
//     if(err) throw err;
//     console.log(data.toString())

//     fs.appendFile(path.join(__dirname,"files","lorem.text"),"\n\nwriting the next line",(err) =>{
//         if(err) throw err;
//         console.log("appending complete")

//         fs.rename(path.join(__dirname,"files","lorem.text"),path.join(__dirname,"files","rename.text"),(err) =>{
//             if(err) throw err;
//             console.log("rename complete")
//         })
//     })
// })
// to get rid of this callbback hell type of syntax use promises


  const data =  file.writeFile(path.join(__dirname,"files","debnath.txt"),"puja debanth")
  console.log(data)
const fileOps = async () =>{
    try{ 
       const data = await fs.readFile(path.join(__dirname,"files","rename.txt"),"utf8");
       console.log(data)
      await fs.unlink(path.join(__dirname,'files',"rename.txt"))
      await fs.writeFile(path.join(__dirname,"files","rename.txt") ,"hello, my name is puja")
      await fs.appendFile(path.join(__dirname,"files","rename.txt"),"\n nice to meet you !")
      await  fs.rename(path.join(__dirname,"files","rename.txt"),path.join(__dirname,"files","intro.text"))
      const newData =  await fs.readFile(path.join(__dirname,"files","intro.txt"),"utf8");
      console.log(newData)
    }catch(err){
        console.log(err)
    }
}
fileOps()

process.on("uncaughtException",err=>{
    console.error(`the uncaught error was ${err}`)
    process.exit(1);
})