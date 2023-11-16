const fs = require("fs").promises
const ms = require("fs")
const {v4:uuid} = require("uuid")
const path = require("path")

const {format} = require("date-fns")
const logEvents = async (message) =>{
    const datetime = `${ format(new Date(), "yyyyMMdd/HH:mm:ss")}`
    const logdata = `${datetime}\t${uuid()}\t${message}\n`
    console.log(logdata + "---------")
    try{
        if(!ms.existsSync(path.join(__dirname,"logs"))){
             await fs.mkdir(path.join(__dirname,"logs"))
        }
        await fs.appendFile(path.join(__dirname,"logs","logEvent.txt"), logdata)
    }catch(err){
        console.log(err)
    }
}

logEvents()
module.exports = logEvents

