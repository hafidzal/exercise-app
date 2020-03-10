const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());    

const uri = 'mongodb+srv://dbExercise:hafidz321@cluster0-ejy59.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true,
                         useCreateIndex: true, 
                         useUnifiedTopology: true,
                         dbName: 'dbExercise'  }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});