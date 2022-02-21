const express = require('express');
const app = express();
const routes = require("./routes")
const port = 5000;
//use static files like CSS
app.use(express.static('public'));
app.use('/',routes)
app.set("port",port)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

});