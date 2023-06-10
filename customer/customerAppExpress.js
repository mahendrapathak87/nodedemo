const http = require('http');
const path = require('path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use(adminRoute);
app.use(shopRoute);

//404 page not found
app.use((req,res,next) =>{
    //res.status(404).send('<h1>Page Not Found');
    console.log(path.join(__dirname,'views', '404.html'));
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
})



//const server = http.createServer(app);

app.listen(7000);