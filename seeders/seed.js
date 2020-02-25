require('dotenv').config({ path: __dirname + '../variables.env' });
const mongodb = "mongodb+srv://zandster:fuckthatsdelish@five-by-five-c4dif.mongodb.net/test?retryWrites=true&w=majority"

const mongoose = require("mongoose");
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

const Workout = require("../models/workout");

// toJSON
let workoutSeed = [
  {
    "day": "new Date().setDate(new Date().getDate()-10)",
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  }];

// let workoutSeed = [
//   {
//     day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-9),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Lateral Pull",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-8),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Push Press",
//         duration: 25,
//         weight: 185,
//         reps: 8,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-7),
//     exercises: [
//       {
//         type: "cardio",
//         name: "Running",
//         duration: 25,
//         distance: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-6),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 285,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-5),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-4),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Quad Press",
//         duration: 30,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-3),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-2),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Military Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-1),
//     exercises: [
//       {
//         type: "cardio",
//         name: "sprints",
//         duration: 30,
//         distance: 2
//       }
//     ]
//   }];

async function deleteData() {
  console.log(`Dropping Data ... ☔️ ☔️ `);
  await Workout.remove();
  console.log(`Data Deleted. To load sample data, run\n\n\t npm run seed\n\n`);
  process.exit();
}

async function loadData() {
  try {
    await Workout.insertMany(workoutSeed);
    console.log('👍👍👍👍👍👍👍👍 Done!');
    process.exit();
  } catch(e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
    console.log(e);
    process.exit();
  }
}

if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}

