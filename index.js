const http = require('http');

const server = http.createServer((req,res)=>{
        if(req.url == '/'){
            res.end('<h1>hello </h1><h1>HI</h1>')
        }
})

server.listen(3000,()=>{
    console.log('server is running')
})