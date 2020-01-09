const router = require('express').Router();

const Story = require('./stories-model.js')

const restricted = require('../auth/auth-middleware.js');

router.get('/approved', (req, res) => {
    Story.sort(1)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => res.send(err));

})

// 0 is false

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

router.get('/process', (req, res) => {
    Story.sort(0)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => res.send(err));
})

router.get('/process/:id', (req, res) => {
const id = req.params.id
if (!id) {
    res.status(404).json({ message: "Could not find story with that ID"})
} else {
    Story.findById(id)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: 'The story could not be retrieved.' });
      })
    }
})

router.delete('/process/:id', (req, res) => {
    const { id } = req.params;

    Story.remove(id)
    .then(data => {
        if (data) {
            res.json({data})
        } else {
            res.status(404).json({ message: 'Could not find story with given id' });
        }})
        .catch(err => {
            res.status(500).json({ 
              message: err,
            });
          })
    }) 

router.put('/process/:id', (req, res) => {
    const changes = req.body
    const { id } = req.params

    Story.findById(id)
    .then(data => {
        if(data) {
        Story.update(id, changes)
            .then(updatedStory => {
                res.status(200).json(updatedStory);
             })
        }    else {
                res.status(404).json({ message: 'Could not find log with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: err})
    })
})

module.exports = router