

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    /*console.log(req);
    console.log('url');
    console.log(req.url);
    console.log('headers');
    console.log(req.headers);
    console.log('method');
    console.log(req.method);*/

    const url = req.url;
    const method  = req.method;

    if(url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>my page</title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="name"><input type="submit" name="submit" /></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url == '/message') {
        const body = [];

        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() =>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            //fs.writeFileSync('myfile.txt','dummy text');
            //res.statusCode =302;
           // res.setHeader('Location','/test');
            //return res.end();

        });
        
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my page</title></head>');
    res.write('<body><h1>Hello world ====</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);