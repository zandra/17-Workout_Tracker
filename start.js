const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.DATABASE;
console.log(url);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  });

// models
require('./models/workout');

// require and start app
const app = require('./server');
app.set('port', process.env.PORT || 3030);

const server = app.listen(app.get('port'), () => {
  console.log(`App running on port ${server.address().port}!`);
});