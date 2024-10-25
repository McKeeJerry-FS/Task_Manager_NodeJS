const express = require('express');
const app = express();
const tasks = require('./routes/tasksRoutes');
const port = 3000;  
// middleware
app.use(express.json());  

// routes

// Homepage
app.get('/', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
