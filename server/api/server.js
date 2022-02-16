const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/employees', function (req, res) { // the path is /employees. the callback function with the parameters of req and res. 

    res.send(req) //  responds with sending the data of all the employees in the json object 
})

const port = 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})