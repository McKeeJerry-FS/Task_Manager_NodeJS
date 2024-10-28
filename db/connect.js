const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://jerry:Momiji24@nodeexpressproject.zcpi5.mongodb.net/TaskManagerNode?retryWrites=true&w=majority&appName=NodeExpressProject';

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true})
}

module.exports = connectDB;        