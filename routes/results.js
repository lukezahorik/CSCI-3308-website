var express = require('express');
var db = require('../database'); 	//	calls database connection
var app = express();
module.exports = app;

app.get('/', function (request, response) {
    var query = '';

    db.any(query)
      .then(function (rows) {
          response.render('results/results', {
              title: 'Results',
              data: rows
          })
      })
      .catch(function (err) {
          // display error message in case an error
          request.flash('error', err);
          response.render('results/results', {
              title: 'Results',
              data: ''
          })
      })
});

// Route to insert values. Notice that request method is POST here
app.post('/', function (request, response) {
    var query = String(request.sanitize('ingreQuery').escape().trim());	
   query = query.replace(/&#x27;/g,"'");
   

	// display query results
    db.any(query)
      .then(function (rows) {
          response.render('results/results', {
              title: 'Results',
              data: rows
          })
      })
      .catch(function (err) {
          // display error message in case an error
          request.flash('error', err);
          response.render('results/results', {
              title: query,
              data: ''
          })
      })
});