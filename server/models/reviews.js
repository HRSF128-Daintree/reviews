const db = require('../../database/index.js');
const Promise = require('bluebird');

module.exports = {
  getReviews: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM messages', ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  }, // a function which produces all the messages
  createReview: function (data) {
    return new Promise((resolve, reject) => {
      let arr = [data.username, data.message, data.roomname];
      //console.log(data.message.length);
      db.query('INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)', arr, ((err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }));
    });
  },
  deleteReview: function (data) {
    const reviewId = data.id || 2;

  },
  updateReview: function (data) {
    const reviewId = data.id || 2;
    const arr;


  }
};

const getReviewData = (hotelId = 1) => {
  const sql = 'SELECT reviews.*, month(reviews.date_of_stay) as month_of_stay, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM reviews JOIN hotels ON reviews.hotel_id = hotels.id JOIN users ON reviews.user_id = users.id WHERE hotels.id = ?';

  db.query(sql, [hotelId], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

const getQuestionData = (callback, hotelId = 1) => {
  const questionSql = 'SELECT questions.*, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM questions JOIN hotels ON questions.hotel_id = hotels.id JOIN users ON questions.user_id = users.id WHERE hotels.id = ?';

  const answersSql = 'SELECT answers.*, users.username, users.user_avatar, users.user_city FROM answers JOIN questions ON answers.question_id = questions.id JOIN users on answers.answerer_user_id = users.id';

  const questionAnswerPacket = {};

  db.query(questionSql, [hotelId], (err, results) => {
    if (err) throw err;
    questionAnswerPacket.questions = results;

    db.query(answersSql, (error, result) => {
      if (error) throw error;
      questionAnswerPacket.answers = result;
      callback(questionAnswerPacket);
    });
  });
};