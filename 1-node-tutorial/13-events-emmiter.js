const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
 console.log(`data recieved from ${name} and id is ${id}`)

})

customEmitter.on('response',()=>{
 console.log('here are some other logic')
})

customEmitter.emit('response','jhon',82)