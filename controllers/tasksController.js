const Task = require('../models/task'); 
const swal = require('sweetalert2');

// getAllTasks app.get('/api/v1/tasks')
// getById app.get('/api/v1/tasks/:id')
// createTask app.post('/api/v1/tasks')
// updateTask app.put('/api/v1/tasks/:id')
// deleteTask app.delete('/api/v1/tasks/:id')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
        swal.fire('Task created', 'Your task has been created', 'success');
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

const getTask = async (req, res) => { 
    try{
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        res.status(200).send({task});
        if (!task) {
            return res.status(404).json({msg: `Task with id ${taskID} not found`});
        }
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID,}, req.body, {
            new: true,
            runValidators: true
        });
        if(!task){
            return res.status(404).json({msg: `Task with id ${taskID} not found`});
        }
        res.status(200).json({task});
    } 
    catch (error) {
        res.status(500).json({msg: error});
    }
};

const deleteTask = async (req, res) => {
    try{
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if(!task){
            return res.status(404).json({msg: `Task with id ${taskID} not found`});
        }
        // res.status(200).json({task});
        res.status(200).json({task: null, status: 'success'});
    }
    catch{
        res.status(404).json({msg: `Task with id ${taskID} not found`});
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};