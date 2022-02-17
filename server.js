const express = require('express');
const app = express();
const port = 3000;
//use static files like CSS
app.use(express.static('public'));

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)

});
//Tutor Objects here