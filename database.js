//	get connected with the postgres

var pgp = require('pg-promise')();

const dbConfig = process.env.DATABASE_URL;
/*
{
   host: 'localhost',
   port: 5432,
   database: 'tipstest',
   user: 'postgres',
   password: 'wehc1234'
};
*/

var db =  pgp(dbConfig);

module.exports = db;