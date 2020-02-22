const mongoose = require("mongoose");
const router = require("express").Router();
const Workout = mongoose.model('Workout');
const db = require("./models/workout.js");

router.get("/hello", (req, res) => {
  res.send("hello");
})

router.get("/exercises", (req, res) => {
res.send("exercises");
})

router.get("/api/workouts", (req, res) => {
  db.collection.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;