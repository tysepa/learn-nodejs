const http = require('http');

const server =http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end('About Page')
    }
    res.end('error page')
})

server.listen(5000,()=>{
    console.log("The server run on port 5000....")
})