// const app = require("./server");
const router = require("express").Router();
const workoutController = require('./workoutController');
const mongoose = require("mongoose");
const Workout = mongoose.model('Workout');
const path = require('path');


router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'));
});

router.get("/api/workouts", workoutController.getAllWorkouts);

// router.get("/api/workouts", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.post("/api/workouts", (req, res) => {
  console.log(req.body);
  Workout.create(req.body)
  .then(data => res.json(data))
  .catch(err => console.log(err));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
});



module.exports = router;