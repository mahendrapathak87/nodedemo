const express = require('express');

const routes = express.Router();

routes.get('/', (req, res, next) => {
    console.log('in next middleware');
    res.send('<h1>in main route</h1>');
});


module.exports = routes;