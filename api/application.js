const express = require('express');
const app = express();

// Create the API routes
app.use('/tutors', require('./tutors.js'));

const port = 5000;

// Start backend application
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});