const router = require('express').Router();

const Story = require('./stories-model')

const restricted = require('../auth/auth-middleware.js');

router.get('/approved', (req, res) => {
    
})

router.post('/process', (req, res) => {
    let story = req.body;

    Story.add(story)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/process', restricted, (req, res) => {
    Story.
})

router.get('/process/:id', restricted, (req, res) => {

})

router.delete('/process/:id', restricted, (req, res) => {

})

router.put('/process/:id', restricted, (req, res) => {

})