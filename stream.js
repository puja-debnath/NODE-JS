const fs = require("fs")

const rs = fs.createReadStream("./files/first.text",{encoding:"utf8"})
const ws = fs.createWriteStream("./files/newfile.text")

// rs.on("data",(datachunk) =>{
//     ws.write(datachunk)
// })

//rs.pipe(ws)

if(!fs.existsSync("./new")){
    fs.mkdir("./new",err=>{
        if (err) throw err
        console.log("directory created")
    })
}else{
    fs.rmdir("./new",err=>{
        if (err) throw err
        console.log("directory removed")
    })
}