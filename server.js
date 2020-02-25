const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// ##### Turn the key -> app start workflow
//routes
app.use("/", routes);
// next 👇


module.exports = app;