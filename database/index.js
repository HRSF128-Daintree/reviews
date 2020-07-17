// const mysql = require('mysql');
// const creds = require('../mySQL.creds.js');

const cassandra = require('cassandra-driver');
const creds = require('../cassandra.creds.js');

const client = new cassandra.Client({
  contactPoints: creds.contactPoints,
  localDataCenter: creds.localDataCenter,
  keyspace: creds.keyspace
});

client.connect()
  .catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown().then(() => { throw err; });
  });

// connection.connect((err) => {
//   if (err) { console.error(`error: ${err.message}`); }
//   console.log('Connected to the MySQL server.');
// });

module.exports = client;
