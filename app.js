const express = require('express');
const app = express();
const tasks = require('./routes/tasksRoutes');
const port = 3000;  


// routes
//Homepage
app.get('/', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks    );

// getAllTasks app.get('/api/v1/tasks')
// getById app.get('/api/v1/tasks/:id')
// createTask app.post('/api/v1/tasks')
// updateTask app.put('/api/v1/tasks/:id')
// deleteTask app.delete('/api/v1/tasks/:id')


app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
