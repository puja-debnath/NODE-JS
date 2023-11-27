const logEvents = require("./logEvents")

const EventEmitter = require("events")  // EventEmitter  is class
class MyEmitter extends EventEmitter{}

//initialize object
const  myemitter = new MyEmitter()      // myemitter  is  object

//add lister fo rthe log event
myemitter.on("log",(msg) => {logEvents(msg)})

setTimeout(() => {
    myemitter.emit('log',"log event emitted") 
}, 1000);