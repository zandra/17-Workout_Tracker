const mongoose = require("mongoose");
const Workout = mongoose.model('Workout');
const path = require('path');

// Front End Routes
exports.index = async (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
}

exports.addExercise = (req, res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'));
}

exports.stats = (req, res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'));
}

// API Routes
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
exports.getWorkoutRange = (req, res) => {
  Workout.find()
  // .where('day').gt("2020-02-16T13:04:11.391Z").lt("2020-02-22T13:04:11.392Z") // greater than, less than
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
}

// PUT -> Add Exercise to Last Workout
exports.addNewExercise = async (req, res) => {
const exercise = {
          name: req.body.name,
          type: req.body.type,
          duration: req.body.duration,
          weight:  req.body.weight || '',
          reps: req.body.reps || '',
          sets: req.body.sets || '',
          distance: req.body.distance || ''
      };

  Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: exercise}})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  })
}

exports.addNewWorkout = async (req, res) => {
  const exercise = {
            name: req.body.name,
            type: req.body.type,
            duration: req.body.duration,
            weight:  req.body.weight || '',
            reps: req.body.reps || '',
            sets: req.body.sets || '',
            distance: req.body.distance || ''
        };

  const newWorkout = await Workout.create({day: new Date().setDate(new Date().getDate()), exercises: [exercise]});
  newWorkout.then(console.log("success!"));
}

  