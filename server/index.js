const express = require('express');

const app = express();
const port = 3004;
const controller = require('./controllers/reviews.js');

app.use('/reviews', express.static('public'));

// app.get('/reviews/:hotelId', (req, res) => {
//   to do: filter hotelId to validate input
//   const hotelId = req.params.hotelId || 1;
//   models.getReviewData((results) => {
//     res.status(200).send(JSON.stringify(results));
//   }, hotelId);
// });

// app.get('/questions', (req, res) => {
//   models.getQuestionData((resultsPacket) => {
//     res.status(200).send(JSON.stringify(resultsPacket));
//   });
// });

app.get('/reviews/:hotelId', controller.get);
app.post('/reviews', controller.post);
app.delete('/reviews/:hotelId', controller.delete);
app.patch('/reviews/:hotelId', controller.patch);

// app.post('/reviews', (req, res) => {
//   res.send('helloWorld')
// });

// app.delete('/reviews', (req, res) => {
//   res.send('helloWorld')
// });

// app.patch('/reviews', (req, res) => {
//   res.send('helloWorld')
// });

app.listen(port, () => console.log(`Reviews app listening at ${port}`));
