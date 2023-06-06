const http = require('http');

const express = require('express');

const app = express();

app.use('/test', (req, res, next)=> {
    //res.send('<h1>in test route</h1>');
        console.log('in middleware');
        //res.send('<h1>in test route</h1>');
        //next();
});

app.use('/', (req, res, next) => {
    
    console.log('in next middleware');
    res.send('<h1>in main route</h1>');
});

//const server = http.createServer(app);

app.listen(7000);