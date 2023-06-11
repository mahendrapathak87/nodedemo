const http = require('http');
const path = require('path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoute.routes);
app.use(shopRoute);

//404 page not found
app.use((req,res,next) =>{
    //res.status(404).send('<h1>Page Not Found');
    console.log(path.join(__dirname,'views', '404.html'));
    //res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
    res.render('page404');
})



//const server = http.createServer(app);

app.listen(7000);