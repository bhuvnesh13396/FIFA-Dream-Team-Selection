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

// Sync Database
// models.sequelize.sync().then( function(){
//     console.log('Nice ! DB looks fine');
// }).catch(function(err){
//     console.log(err,'Something went wrong with database update!');
// });



// Routes
// app.get('*',(req,res) => res.status(200).send({
//     message : 'Welcome !!'
// }));

require('./routes/getPlayerInfo')(app);

app.get('/',(req,res)=>{
    console.log('Hello World');
    res.send('Hello World !!');
});

app.listen(3000, (req,res)=>{
    console.log(`Listening on port ${PORT}`);
});


module.exports = app;

