const express = require('express');
const bodyParser =require('body-parser');

const leaders = express.Router();

leaders.use(bodyParser.json());

leaders.route('/')
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req,res,next) =>{
    res.end('will add the leaders: '+ req.body.name +
        'with details: ' + req.body.description);
})
.put((req,res,next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req,res,next) => {
    res.end('Deleting all the leaders!');
});

module.exports = leaders;