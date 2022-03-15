const { rmSync } = require('fs')
const http=require('http')
const server = http.createServer((req, res)=> {
if ( req.url === '/' ){
 res.end('welcome to our home page')
}
if( req.url === '/about'){
res.end("here is your short history")
}

res.end(`
<h1>Oops!</h1>
<p>we cant seem to find the apge you are  looking for </p>
<a href="/">Back home </a>`)

})   

server.listen(5000)