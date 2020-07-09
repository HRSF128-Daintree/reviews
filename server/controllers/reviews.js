const models = require('../models/reviews.js');

module.exports = {
  getH(req, res) {
    models.getReviews(req.params.hotelId).then((allReviews) => {
      res.status(200);
      res.send(allReviews);
    });
  },
  getR(req, res) {
    models.getOneReview(req.params.reviewId).then((review) => {
      res.status(200);
      res.send(review);
    });
  },
  post(req, res) {
    console.log('in post and body is ', req.body)
    models.createReview(req.body).then(() => {
      res.sendStatus(201);
    });
  },
  delete(req, res) {
    models.deleteReview(req.params.reviewId).then(() => {
      res.status(204);
      res.send('review deleted');
    });
  },
  patch(req, res) {
    models.updateReview(req.body, req.params.reviewId).then(() => {
      res.status(204);
      res.send('review updated');
    });
  },
};

// "user_id": 1513,
// "hotel_id": 99,
// "review_date": "2019-11-27T02:19:04.000Z",
// "review_body": "I was delighted by the cupboards in the room. The location was noisy. I would likely stay here again.",
// "date_of_stay": "2019-09-11T05:00:00.000Z",
// "room_tip": "Never forget to try the snacks.",
// "trip_type": "Couples",
// "overall_rating": 3,
// "value_rating": 5,
// "location_rating": 2,
// "service_rating": 2,
// "rooms_rating": 1,
// "cleanliness_rating": 5,
// "sleep_quality_rating": 4,
// "collected_in_part_hotel": 1,
// "review_helpful_votes": 28