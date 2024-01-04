const fs = require("fs").promises
const ms = require("fs")
const {v4:uuid} = require("uuid")
const path = require("path")


const {format} = require("date-fns")
const logEvents = async (message , logName) =>{
    const datetime = `${ format(new Date(), "yyyyMMdd\tHH:mm:ss")}`
    const logdata = `${datetime}\t${uuid()}\t${message}\n`
    console.log(logdata + "---------")
    try{
        if(!ms.existsSync(path.join(__dirname,"..","logs"))){
             await fs.mkdir(path.join(__dirname,"..","logs"))
        }
        await fs.appendFile(path.join(__dirname,"..","logs",logName), logdata)
    }catch(err){
        console.log(err)
    }
}

const logger = (req,res,next) =>{
    logEvents(`${req.method} \t ${req.headers.origin} \t ${req.url}`, 'reqLog.txt')
    console.log(`${req.method}  ${req.path}`)
    next()
 }

module.exports = {logger,logEvents}



