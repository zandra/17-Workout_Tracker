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
      enum: [ "name", "year", "major", "address" ],
    },
    name: {
      type: String,
      trim: true,
      required: "Name is required."
    },
    duration: Number,
    weight: {
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      default: 1
    },
    sets: Number
  }
});

module.exports = mongoose.model("Workout", workoutSchema);

module.exports = Transaction;

// Note: Make sure to add conditionals or defaults to all non-required
// keys

// type: "resistance",
// name: "Lateral Pull",
// duration: 20,
// weight: 300,
// reps: 10,
// sets: 4