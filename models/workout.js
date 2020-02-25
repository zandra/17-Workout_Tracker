const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: {
      type: String,
      enum: [ "resistance", "cardio"],
    },
    name: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;