const express = require('express');
const router = express.Router();

const { getAllTasks,
        createTask,
        getTask,
        updateTask,
        deleteTask  
} = require('../controllers/tasksController');

router.route('/').get(getAllTasks).post(createTask); // GET /api/v1/tasks
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask); // GET /api/v1/tasks/:id 


module.exports = router;