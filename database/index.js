// const mysql = require('mysql');
// const creds = require('../mySQL.creds.js');

const cassandra = require('cassandra-driver');
const creds = require('../cassandra.creds.js');

const client = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'datacenter1',
  keyspace: 'ks1'
});

// connection.connect((err) => {
//   if (err) { console.error(`error: ${err.message}`); }
//   console.log('Connected to the MySQL server.');
// });

module.exports = client;
