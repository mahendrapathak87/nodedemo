const express = require('express');

const adminData = require('./admin');

const path = require('path');
const custompath = process.env.INIT_CWD;

const routes = express.Router();

routes.get('/', (req, res, next) => {
    console.log('shop.js',adminData.products);
    console.log('in next middleware');
    //res.send('<h1>in main route</h1>');
    //res.sendFile(path.join(custompath,'views','shop'));
    res.render('shop');
});


module.exports = routes;