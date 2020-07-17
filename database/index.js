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
  // .then(function () {
  //   console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
  //   console.log('Keyspaces: %j', Object.keys(client.metadata.keyspaces));
  //   console.log('Shutting down');
  //   return client.shutdown();
  // })
  .catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown().then(() => { throw err; });
  });

// connection.connect((err) => {
//   if (err) { console.error(`error: ${err.message}`); }
//   console.log('Connected to the MySQL server.');
// });

module.exports = client;
