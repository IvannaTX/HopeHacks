console.log('This is the server file')
const express = require('express');
const app = express();
const port = 5000;
//use static files like CSS
app.use(express.static('public'));

app.listen(5000,() => {
    console.log(`Example app listening at http://localhost:${port}`)

});