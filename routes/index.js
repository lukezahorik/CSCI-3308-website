var express = require('express');
var app = express();

app.get('/', function (request, response) {	
   // render the views/index.ejs template file
   response.render('index', {title: 'TipsyBuffs'})
});

app.get('/test', function (request, response) {	
       response.render('index', {title: 'TipsyBuffs'})
       
});

module.exports = app;