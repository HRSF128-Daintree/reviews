const fs = require('fs');
const { format } = require('fast-csv');
const seedHelpers = require('./../seedHelpers.js');

// update these dont be stupid boy
const filename = 'hotel3';
const totalLength = 2500000;
// don't do stuff until those are updated you dunce

const csvStream = format();
csvStream.pipe(fs.createWriteStream(`/media/watsonfu/WatsonFuHD/SDC/${filename}.csv`));

csvStream.write(['hotel_name', 'city']);

for (let i = 0; i < totalLength; i += 1) {
  csvStream.write([seedHelpers.hotelname(), seedHelpers.city()]);
}

csvStream.end();