const Promise = require('bluebird');
// const Moment = require('moment');
const client = require('../../database/index.js');
// const db = require('../../database/index.js');

module.exports = {
  getHotelReviews(hotelName) {
    return new Promise((resolve, reject) => {
      const cassStr = 'SELECT * FROM hotelreviews WHERE hotel_name= ?';
      client.execute(cassStr, [hotelName], ((err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  },

  getUserReviews(username) {
    return new Promise((resolve, reject) => {
      const cassStr = 'SELECT * FROM userreviews WHERE username= ?';
      client.execute(cassStr, [username], ((err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  },

  // getHotelReviews(hotelId) {
  //   return new Promise((resolve, reject) => {
  //     const sqlStr = 'SELECT reviews.*, month(reviews.date_of_stay) as month_of_stay, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM reviews JOIN hotels ON reviews.hotel_id = hotels.id JOIN users ON reviews.user_id = users.id WHERE hotels.id = ?';
  //     db.query(sqlStr, [hotelId], ((err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     }));
  //   });
  // },

  // getUserReviews(reviewId) {
  //   return new Promise((resolve, reject) => {
  //     const sqlStr = 'SELECT * from reviews WHERE id = ?';
  //     db.query(sqlStr, [reviewId], ((err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     }));
  //   });
  // },

  // createReview(data) {
  //   return new Promise((resolve, reject) => {
  //     const reviewDate = Moment(data.review_date).format('YYYY/MM/DD HH:mm:ss');
  //     const stayDate = Moment(data.date_of_stay).format('YYYY/MM/DD HH:mm:ss');

  //     const sqlStr = 'INSERT INTO reviews(user_id, hotel_id, review_date, review_body, date_of_stay, room_tip, trip_type, overall_rating, value_rating, location_rating, service_rating, rooms_rating, cleanliness_rating, sleep_quality_rating, collected_in_part_hotel, review_helpful_votes) VALUES ?';

  //     const arr = [
  //       parseInt(data.user_id, 10), parseInt(data.hotel_id, 10), reviewDate,
  //       data.review_body, stayDate, data.room_tip, data.trip_type,
  //       parseInt(data.overall_rating, 10), parseInt(data.value_rating, 10),
  //       parseInt(data.location_rating, 10),
  //       parseInt(data.service_rating, 10), parseInt(data.rooms_rating, 10),
  //       parseInt(data.cleanliness_rating, 10),
  //       parseInt(data.sleep_quality_rating, 10), parseInt(data.collected_in_part_hotel, 10),
  //       parseInt(data.review_helpful_votes, 10),
  //     ];

  //     db.query(sqlStr, [[arr]], ((err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     }));
  //   });
  // },

  // deleteReview(reviewId) {
  //   return new Promise((resolve, reject) => {
  //     const sqlStr = 'DELETE FROM reviews WHERE id = ?';
  //     db.query(sqlStr, [reviewId], ((err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     }));
  //   });
  //   // const reviewId = data.id || 2;
  // },

  // updateReview(data, reviewId) {
  //   return new Promise((resolve, reject) => {
  //     const fieldVal = parseInt(data.fieldVal, 10) ? parseInt(data.fieldVal, 10) : data.fieldVal;
  //     const fieldObj = {};
  //     fieldObj[data.field] = fieldVal;
  //     const sqlStr = 'UPDATE reviews SET ? WHERE ?';
  //     const params = [fieldObj, { id: reviewId }];
  //     db.query(sqlStr, params, ((err, results) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(results);
  //       }
  //     }));
  //   });
  // },
};
