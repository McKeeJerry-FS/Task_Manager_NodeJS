const Task = require('../models/task'); 

// getAllTasks app.get('/api/v1/tasks')
// getById app.get('/api/v1/tasks/:id')
// createTask app.post('/api/v1/tasks')
// updateTask app.put('/api/v1/tasks/:id')
// deleteTask app.delete('/api/v1/tasks/:id')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch {
        res.status(500).json({msg: error});
    }

    res.send('get all tasks');
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

const getTask = async (req, res) => { 
    try{
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        res.send({task});
    } catch {
        res.status(404).json({msg: `Task with id ${taskID} not found`});
    }
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