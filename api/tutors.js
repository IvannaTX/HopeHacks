const express = require('express');
const fs = require('fs');
router = module.exports = express.Router();

// tutors.json is the database file
const tutor_file = './api/tutors.json'

// Endpoint to get all tutors
router.get('/', function (req, res) {
    fs.readFile(tutor_file, 'utf-8', (e, content) => {
        let listOfTutors = JSON.parse(content);
        res.send(listOfTutors);

    })
})

// Endpoint is to search tutors by zip code (route parameter)
router.get('/search/zipcode/:zipcode', (req, res) => {
    fs.readFile(tutor_file, 'utf-8', (e, content) => {
        const listOfTutors = JSON.parse(content);
        const zipCode = req.params.zipcode;
        const filteredList = listOfTutors.filter((item, index) => {
            return (item.zipCode === zipCode)
        });
        res.send(filteredList);
    })
})