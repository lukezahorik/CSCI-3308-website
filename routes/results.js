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
    var ingreStr = request.sanitize('ingreQuery').escape().trim();	
    var ingreArr = ingreStr.split(',');
    var query = 'select * from drinks where ingredients like \'%orange%\'';
    /* -> ingreArr.forEach(
	function(item){ 
        	query += 'like \'%' + item + '%\' and ingredients ';
    });
    query = query.substr(0,(query.length-17));*/

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
              title: 'Results',
              data: ''
          })
      })
});