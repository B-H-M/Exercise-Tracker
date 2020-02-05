const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, 
(err, db) => {
    if (err) {
        console.log('Unable to connect to the server.', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})