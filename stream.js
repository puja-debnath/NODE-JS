const fs = require("fs")

const rs = fs.createReadStream("./files/first.txt",{encoding:"utf8"})
console.log(rs)
const ws = fs.createWriteStream("./files/newfile.txt",{encoding:"utf8"})
ws.write("puja debnathljdfkjhfdgk")
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


