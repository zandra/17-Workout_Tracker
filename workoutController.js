const mongoose = require("mongoose");
const Workout = mongoose.model('Workout');

exports.getAllWorkouts = (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
}

exports.addWorkout = async (req, res) => {
  console.log(req.body);
}