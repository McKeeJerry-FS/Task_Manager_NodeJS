const express = require('express');
const app = express();
const tasks = require('./routes/tasksRoutes');
const connectDB = require('./db/connect');
  
// middleware

app.use(express.json());  

// routes

// Homepage
app.get('/', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } 
  catch (error) {
    console.log(error);
  }
}

start();