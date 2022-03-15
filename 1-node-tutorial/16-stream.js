const {createReadStream} = require('fs')
const { result } = require('lodash')

const stream = createReadStream('  ./content/big.txt',{highWaterMark:90000,encoding:'utf8'})



stream.on('data',(result)=>{
 console.log(result)
})

 stream.on('erro',(err)=>{console.log(err)})
