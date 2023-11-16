const logEvents = require("./puja")

const EventEmitter = require("events")
class MyEmitter extends EventEmitter{}

//initialize object
const  myemitter = new MyEmitter()

//add lister fo rthe log event
myemitter.on("log",(msg) => {logEvents(msg)})

setTimeout(() => {
    myemitter.emit('log',"log eventt emitted") 
}, 1000);