const http = require('http');
const {readFileSync} = require('fs')

const home = readFileSync('./express-tutorial/index.html')
const server = http.createServer((req, res)=>{
    const url = req.url
    if(url === '/'){
     res.writeHead(200,{'content-type':'text/html'})
     res.write(home)
        res.end()
    }
    else if(url ==='/about'){
        res.end('About Page')
    }else{
        res.end('Page Not Found')
    }

})
server.listen(5000)