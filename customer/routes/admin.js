const express = require('express');
const path = require('path');
const custompath = process.env.INIT_CWD;

const routes = express.Router();

const products = [];

routes.get('/addproduct', (req,res,next) => {
    console.log(req.body);
    //res.send('<h1>in add product route</h1>');
    res.sendFile(path.join(custompath,'views','addproduct.html'));
});

routes.post('/addproduct', (req,res,next) => {
    console.log(req.body.name);
    //res.send('<h1>in add product route</h1>');
    
    products.push({'name': req.body.name});
    console.log('products',products);
    res.sendFile(path.join(custompath,'views','addproduct.html'));
});

routes.use('/test', (req, res, next)=> {
        console.log(custompath);
        //res.send('<html><body><form method="POST" action="addproduct"><input type="text" name="name" /> <input type="submit" value="submit" /></form></body></html>');
        res.sendFile(path.join(custompath,'views','test.html'));
        //next();
});


//module.exports = routes;

exports.routes = routes;
exports.products = products;