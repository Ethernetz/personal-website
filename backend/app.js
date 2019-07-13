const express = require('express');

const app = express();

app.use('/classes', (req, res, next) => {
    const classes = [
        {
            id: 'sdgnoi32', 
            title: 'first serverside class', 
            description: 'no one cares',
            projects: []
        },
        {
            id: 'oijfba', 
            title: 'second serverside class', 
            description: 'blahhh',
            projects: []
        }
    ]
    res.status(200).json(classes);
});

module.exports = app;