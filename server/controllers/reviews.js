const models = require('../models/reviews.js');

module.exports = {
  get(req, res) {
    models.getReviews().then((allReviews) => {
      // console.log('all messages from get are', allMessages);
      res.status(200);
      res.send(allReviews);
    });
  },
  post(req, res) {
    // console.log('post req',req.body)
    models.createReview(req.body).then(() => {
      res.sendStatus(201);
      // res.send('message posted');
    });
  },
  delete(req, res) {
    // console.log('post req',req.body)
    models.deleteReview(req.body).then(() => {
      res.status(201);
      res.send('review deleted');
    });
  },
  patch(req, res) {
    // console.log('post req',req.body)
    models.updateReview(req.body).then(() => {
      res.status(201);
      res.send('review updated');
    });
  },
};
