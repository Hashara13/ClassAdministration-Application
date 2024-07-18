const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/student_class";
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(URL, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}
);


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected successfully!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});