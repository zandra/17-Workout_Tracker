const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
      required: "Name is required."
    },
    duration: {
      type: Number,
      required: true
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }
});

module.exports = mongoose.model("Workout", workoutSchema);