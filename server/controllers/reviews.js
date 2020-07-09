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
    console.log('in post and body is ', req.body);
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
