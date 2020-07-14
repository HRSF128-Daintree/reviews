const fs = require('fs');
const { format } = require('fast-csv');
const { v4 } = require('uuid');
const faker = require('faker');
const seedHelpers = require('./../seedHelpers.js');

// update these dont be stupid boy
const filename = 'hotelsC1';
const totalLength = 5000000;
// don't do stuff until those are updated you dunce

let fsStream = fs.createWriteStream(`/media/watsonfu/WatsonFuHD/SDC/${filename}.csv`);

fsStream.write('review_id,hotel_name,username,email,user_city,hotel_city,review_date,date_of_stay,review_body,trip_type,overall_rating,value_rating,location_rating\n');

const writeManyReviews = (writer, callback) => {
  let count = 0;
  let flag = true;
  const write = () => {
    flag = true;
    while (flag && count < totalLength) {
      if (count%1000000 === 0) {
        console.log(count);
      }
      count++;
      const hotel_name = seedHelpers.hotelname();
      const username = faker.name.findName();
      const email = faker.internet.email();
      const user_city = seedHelpers.city();
      const hotel_city = seedHelpers.city();
      const dateOfStay = seedHelpers.date(new Date(2010, 0, 1));
      const reviewDate = seedHelpers.date(dateOfStay);
      const reviewBody = seedHelpers.reviewBody();
      const tripType = seedHelpers.tripType();
      const overallRating = faker.random.number({ min: 1, max: 5 });
      const valueRating = faker.random.number({ min: 1, max: 5 });
      const locationRating = faker.random.number({ min: 1, max: 5 });
      const string = `${v4()},${hotel_name},${username},${email},${user_city},${hotel_city},${reviewDate.toISOString().slice(0,10)},${dateOfStay.toISOString().slice(0,10)},${reviewBody},${tripType},${overallRating},${valueRating},${locationRating}\n`;
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

// COPY hotelReviews(hotel_name, username, email, user_city, hotel_city, review_date, date_of_stay, review_body, trip_type, overall_rating, value_rating, location_rating) FROM '/media/watsonfu/WatsonFuHD/SDC/hotelsC0.csv' WITH HEADER = TRUE;

// "0"+startCount.toString(16).slice(-2).toUpperCase()
