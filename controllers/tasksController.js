const Task = require('../models/task'); 

// getAllTasks app.get('/api/v1/tasks')
// getById app.get('/api/v1/tasks/:id')
// createTask app.post('/api/v1/tasks')
// updateTask app.put('/api/v1/tasks/:id')
// deleteTask app.delete('/api/v1/tasks/:id')

const getAllTasks = (req, res) => {
    res.send('get all tasks');
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

const getTask = (req, res) => { 
    res.send('get a single task');
};

const updateTask = (req, res) => {
    res.send('update task');
};

const deleteTask = (req, res) => {
    res.send('delete task');
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};