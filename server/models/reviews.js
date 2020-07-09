const Promise = require('bluebird');
const db = require('../../database/index.js');
const Moment = require('moment');

module.exports = {
  getReviews(hotelId) {
    return new Promise((resolve, reject) => {
      const sqlStr = 'SELECT reviews.*, month(reviews.date_of_stay) as month_of_stay, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM reviews JOIN hotels ON reviews.hotel_id = hotels.id JOIN users ON reviews.user_id = users.id WHERE hotels.id = ?';
      db.query(sqlStr, [hotelId], ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  },

  getOneReview(reviewId) {
    return new Promise((resolve, reject) => {
      const sqlStr = 'SELECT * from reviews WHERE id = ?';
      db.query(sqlStr, [reviewId], ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  },

  createReview(data) {
    return new Promise((resolve, reject) => {
      const reviewDate = Moment(data.review_date).format('YYYY/MM/DD HH:mm:ss');
      const stayDate = Moment(data.date_of_stay).format('YYYY/MM/DD HH:mm:ss');

      const sqlStr = 'INSERT INTO reviews(user_id, hotel_id, review_date, review_body, date_of_stay, room_tip, trip_type, overall_rating, value_rating, location_rating, service_rating, rooms_rating, cleanliness_rating, sleep_quality_rating, collected_in_part_hotel, review_helpful_votes) VALUES ?';

      const arr = [parseInt(data.user_id), parseInt(data.hotel_id), reviewDate, data.review_body, stayDate, data.room_tip, data.trip_type, parseInt(data.overall_rating), parseInt(data.value_rating), parseInt(data.location_rating), parseInt(data.service_rating), parseInt(data.rooms_rating), parseInt(data.cleanliness_rating), parseInt(data.sleep_quality_rating), parseInt(data.collected_in_part_hotel), parseInt(data.review_helpful_votes)];

      db.query(sqlStr, [[arr]], ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  },

  deleteReview(reviewId) {
    return new Promise((resolve, reject) => {
      const sqlStr = 'DELETE FROM reviews WHERE id = ?';
      db.query(sqlStr, [reviewId], ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
    // const reviewId = data.id || 2;
  },

  updateReview(data, reviewId) {
    return new Promise((resolve, reject) => {
      const fieldVal = parseInt(data.fieldVal) ? parseInt(data.fieldVal) : data.fieldVal;
      let fieldObj = {};
      fieldObj[data.field] = fieldVal;
      const sqlStr = 'UPDATE reviews SET ? WHERE ?';
      const params = [fieldObj, {id: reviewId}];
      db.query(sqlStr, params, ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
    // const reviewId = data.id || 2;
  },
};

// user_id: 1501,
// hotel_id: 99,
// review_date:2019-11-27,
// review_body: "I was delighted by the cupboards in the room. The location was noisy. I would likely stay here again.",
// date_of_stay:2019-09-11,
// room_tip: "Never forget to try the snacks.",
// trip_type: "Couples",
// overall_rating: 3,
// value_rating: 5,
// location_rating: 2,
// service_rating: 2,
// rooms_rating: 1,
// cleanliness_rating: 5,
// sleep_quality_rating: 4,
// collected_in_part_hotel: 1,
// review_helpful_votes: 28