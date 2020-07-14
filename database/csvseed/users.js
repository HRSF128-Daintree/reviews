const fs = require('fs');
const { format } = require('fast-csv');
const faker = require('faker');
const seedHelpers = require('./../seedHelpers.js');

// update these dont be stupid boy
const filename = 'user3';
const totalLength = 2500000;
// don't do stuff until those are updated you dunce

const csvStream = format();
csvStream.pipe(fs.createWriteStream(`/media/watsonfu/WatsonFuHD/SDC/${filename}.csv`));

csvStream.write(['username', 'email', 'user_city']);

for (let i = 0; i < totalLength; i += 1) {
  let name = faker.name.findName();
  let email = faker.internet.email();

  // if (name.length > 20) {
  //   name = name.slice(0,20);
  // }
  // if (email.length > 20) {
  //   email = email.slice(-20);
  // }
  csvStream.write([name, email, seedHelpers.city()]);
}

csvStream.end();

// \COPY users(username, email, user_city) FROM '/media/watsonfu/WatsonFuHD/SDC/<fname>.csv' DELIMITER ',' CSV HEADER;
