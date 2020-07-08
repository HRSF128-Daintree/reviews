const models = require('../models/reviews.js');

module.exports = {
  get: function (req, res) {
    models.getReviews().then((allReviews) => {
      //console.log('all messages from get are', allMessages);
      res.status(200);
      res.send(allReviews);
    });

  },
  post: function (req, res) {
    //console.log('post req',req.body)
    models.createReview(req.body).then(() => {
      res.sendStatus(201);
      //res.send('message posted');
    });
  },
  delete: function (req, res) {
    //console.log('post req',req.body)
    models.deleteReview(req.body).then(() => {
      res.status(201);
      res.send(`review deleted`);
    });
  },
  patch: function (req, res) {
    //console.log('post req',req.body)
    models.updateReview(req.body).then(() => {
      res.status(201);
      res.send(`review updated`);
    });
  },
};