const fs = require('fs');
const { format, writeToPath, writeToStream } = require('@fast-csv/format');

const writer = async () => {
  let headersDone = await writeToPath("/media/watsonfu/WatsonFuHD/SDC/hotel.csv", [['hotel_id', 'hotel_name', 'city']]);

  for (let i = 0; i < 10; i += 1) {
    // writeToPath("/media/watsonfu/WatsonFuHD/SDC/hotel.csv", [['test', 'test', 'test']], {flags: 'a'});
    writeToStream("/media/watsonfu/WatsonFuHD/SDC/hotel.csv", [['test', 'test', 'test']], {flags: 'a'});
  }
};

writer();

// csv.writeToPath("/media/watsonfu/WatsonFuHD/SDC/hotel.csv", []);


// const obj = {
//   "id": 9,
//   "user_id": 1964,
//   "hotel_id": 1,
//   "review_date": "2019-11-04T19:04:28.000Z",
//   "review_body": "I loved the appliances in the outdoor area. The location was nothing special. All things aside, I would very likely stay here again.",
//   "date_of_stay": "2010-08-25T07:00:00.000Z",
//   "room_tip": "Never ask for local restaurant recommendations.",
//   "trip_type": "Business",
//   "overall_rating": 3,
//   "value_rating": 1,
//   "location_rating": 0,
//   "service_rating": 0,
//   "rooms_rating": 5,
//   "cleanliness_rating": 1,
//   "sleep_quality_rating": 1,
//   "collected_in_part_hotel": 0,
//   "review_helpful_votes": 2,
//   "month_of_stay": 8,
//   "hotel_name": "Intercontinental Uptown Moon",
//   "hotel_city": "Chicago",
//   "username": "Kathy A",
//   "user_avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVscczKCwBsAg0aMMcI5NjX1meu8_HDZ3d2jhQonix1DCY5n1E&usqp=CAU",
//   "user_city": "Indianapolis",
//   "user_contributions": 30,
//   "user_helpful_votes": 12
// };

// CREATE TABLE reviews (
//   id SERIAL,
//   user_id integer NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
//   hotel_id integer NOT NULL REFERENCES hotels(hotel_id) ON DELETE CASCADE,
//   review_date DATE NOT NULL,
//   date_of_stay DATE NOT NULL,
//   review_body varchar(200) NOT NULL,
//   room_tip varchar(140),
//   trip_type varchar(60),
//   overall_rating smallint NOT NULL,
//   CHECK (overall_rating > 0 AND overall_rating < 6),
//   value_rating smallint,
//   location_rating smallint,
//   service_rating smallint,
//   rooms_rating smallint,
//   cleanliness_rating smallint,
//   sleep_quality_rating smallint,
//   PRIMARY KEY (id, user_id, hotel_id)
// );

// /* maybe add constraints for all? */
// /* inheritance could be a possiblity */

// CREATE TABLE hotels (
//   hotel_id SERIAL PRIMARY KEY,
//   hname varchar(40) NOT NULL,
//   city varchar(15) NOT NULL
// );


// CREATE TABLE users (
//   user_id SERIAL PRIMARY KEY,
//   username varchar(50) NOT NULL,
//   user_avatar varchar(150),
//   user_city varchar(15) NOT NULL,
// /*  user_contributions int DEFAULT 0, */
// );
