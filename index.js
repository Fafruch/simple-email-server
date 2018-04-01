const express = require('express');
const bodyParser = require('body-parser');

const cors = require('./utils/cors');
const sendMailWith = require('./utils/sendMailWith');

const app = express();

// add middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// configure
app.set('port', (process.env.PORT || 5000));

// routes
app.post('/', (request, response) => {
  const { body } = request;

  sendMailWith(body);
  response.send(body);
});

// listen
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
