const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('error', (err) => {
  console.log(`☠️ girl please -> ${err.message}`);
});

// models
require('./models/workout');

// require and start app
const app = require('./server');
app.set('port', process.env.PORT || 3030);

const server = app.listen(app.get('port'), () => {
  console.log(`App running on port ${server.address().port}!`);
});