const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutTwoSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    resistance: {    
      name: {
        type: String,
        trim: true,
        required: "Name is required."
        },
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        default: 1
      },
      sets: Number
      },
    cardio: {    
        name: {
          type: String,
          trim: true,
          required: "Name is required."
        },
        duration: Number
      }
  }
});

module.exports = mongoose.model("WorkoutTwo", workoutTwoSchema);
