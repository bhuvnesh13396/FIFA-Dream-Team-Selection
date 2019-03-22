'use strict';
const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = 3000;

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var models = require('./models');

require('./routes/getPlayerInfo')(app);

app.get('/',(req,res)=>{
    console.log('Hello World');
    res.send('Hello World !!');
});

app.listen(3000, (req,res)=>{
    console.log(`Listening on port ${PORT}`);
});


module.exports = app;

