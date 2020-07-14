const fs = require('fs');
const { format } = require('fast-csv');
const faker = require('faker');
const seedHelpers = require('./../seedHelpers.js');

// update these dont be stupid boy
const filename = 'test';
const totalLength = 10;
// don't do stuff until those are updated you dunce

//const csvStream = format();
let fsStream = fs.createWriteStream(`/media/watsonfu/WatsonFuHD/SDC/${filename}.csv`);
// csvStream.pipe(fsStream);

fsStream.write('user_id,hotel_id,review_date,date_of_stay,review_body,trip_type,overall_rating,value_rating,location_rating\n');

const writeManyReviews = (writer, callback) => {
  let count = 0;
  let ok = true;
  const write = () => {
    ok = true;
    while (ok && count < totalLength) {
      if (count%100000 === 0) {
        console.log(count);
      }
      count++;
      const user_id = faker.random.number({ min: 1, max: 10000000 });
      const hotel_id = faker.random.number({ min: 1, max: 10000000 });
      const dateOfStay = seedHelpers.date(new Date(2010, 0, 1));
      const reviewDate = seedHelpers.date(dateOfStay);
      const reviewBody = seedHelpers.reviewBody();
      const tripType = seedHelpers.tripType();
      const overallRating = faker.random.number({ min: 1, max: 5 });
      const valueRating = faker.random.number({ min: 1, max: 5 });
      const locationRating = faker.random.number({ min: 1, max: 5 });
      const string = `${user_id},${hotel_id},${reviewDate.toISOString()},${dateOfStay.toISOString()},${reviewBody},${tripType},${overallRating},${valueRating},${locationRating}\n`;
      if (count === totalLength) {
        writer.write(string, callback);
      } else {
        ok = writer.write(string);
      }
    }
    if (count < totalLength) {
      writer.once('drain', write);
    }
  };
  write();
};

writeManyReviews(fsStream, () => { fsStream.end(); });


// \COPY users(username, email, user_city) FROM '/media/watsonfu/WatsonFuHD/SDC/<fname>.csv' DELIMITER ',' CSV HEADER;

// SELECT hotels.hotel_name, hotels.city, users.username, users.email, users.user_city FROM reviews JOIN hotels ON reviews.hotel_id = hotels.hotel_id JOIN users ON reviews.user_id = users.user_id WHERE hotel_id = 100;
