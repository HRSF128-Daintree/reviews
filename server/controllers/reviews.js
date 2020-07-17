const models = require('../models/reviews.js');

module.exports = {
  getH(req, res) {
    const hname = req.params.hotelName.replace(/_/g, ' ');
    console.log(hname);
    models.getHotelReviews(hname).then((hotelReviews) => {
      res.status(200);
      res.send(hotelReviews.rows);
    });
  },
  getU(req, res) {
    const username = req.params.username.replace(/_/g, ' ');
    models.getUserReviews(username).then((UserReviews) => {
      res.status(200);
      res.send(UserReviews.rows);
    });
  },
  // post(req, res) {
  //   console.log('in post and body is ', req.body);
  //   models.createReview(req.body).then(() => {
  //     res.sendStatus(201);
  //   });
  // },
  // delete(req, res) {
  //   models.deleteReview(req.params.reviewId).then(() => {
  //     res.status(204);
  //     res.send('review deleted');
  //   });
  // },
  // patch(req, res) {
  //   models.updateReview(req.body, req.params.reviewId).then(() => {
  //     res.status(204);
  //     res.send('review updated');
  //   });
  // },
};
