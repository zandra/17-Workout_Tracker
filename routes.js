const router = require("express").Router();
const workoutController = require('./workoutController');

router.get('/', workoutController.index);
router.get('/exercise', workoutController.addExercise); // exercise.html 
router.get('/stats', workoutController.stats);

// API routes
router.get("/api/workouts", workoutController.getAllWorkouts);
router.get("/api/workouts/range", workoutController.getWorkoutRange);
// PUT -> Add Exercise to Last Workout 
router.put('/api/workouts/:id', workoutController.addNewExercise);
// POST -> Add New Workout
router.post('/api/workouts', workoutController.addNewWorkout);

module.exports = router;