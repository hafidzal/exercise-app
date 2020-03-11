const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());    

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, //added because the MongoDB Node.js driver rewrote the tool it uses to parse MongoDB connection strings.
                         useCreateIndex: true, //It is to deal with MongoDB deprecating the ensureIndex() function.
                         useUnifiedTopology: true 
                        }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Yeayy! MongoDB database connection established successfully");
})

app.listen(port, () => {
    const exercisesRouter = require('./routes/exercises');
    const usersRouter = require('./routes/users');

    app.use('/exercises', exercisesRouter);
    app.use('/users', usersRouter);

    console.log(`Server is running on port: ${port}`);
});