//	get connected with the postgres

var pgp = require('pg-promise')();

const dbConfig = {
   host: 'ec2-54-243-46-32.compute-1.amazonaws.com',
   port: 5432,
   database: 'd7ncm4tt5a8edo',
   user: 'fftbsmtlkjrdda',
   password: '1f1ea62929ba0acbcbc74d4cd2267c04b70b1a2dfc1106c87aa440ec2ba70ee8'
   /*
   host: 'localhost',
   port: 5432,
   database: 'tipstest',
   user: 'postgres',
   password: 'wehc1234'
   */
};

var db = pgp(dbConfig);

module.exports = db;