const express = require('express');
const app = express();
const port = 3000;  


// routes
//Homepage
app.get('/', (req, res) => {
    res.send('Task Manager App');
});

// getAllTasks app.get('/api/v1/tasks')
// getById app.get('/api/v1/tasks/:id')
// createTask app.post('/api/v1/tasks')
// updateTask app.put('/api/v1/tasks/:id')
// deleteTask app.delete('/api/v1/tasks/:id')


app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
