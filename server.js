const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Bağlantısı
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
    .then(() => {
        console.log("MongoDB connection is successfull");
    })
    .catch((err) => {
        console.error("MongoDB connection error!", err.message);
    });

// Test Route
app.get('/', (req, res) => {
    res.send('Backend server and database connection is active!');
});

const PORT = process.env.PORT || 5000;

// Route Definitons
const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} is starting..`);
});