const express = require('express');
const router = express.Router()
const mathLesson = require('../db/seeds/mathLesson');

// getting all info from DB
router.get("/", async (req, res) => {
  try {
      const mathLessons = await mathLesson.find()
      res.json(mathLessons)

  } catch (err) {
      res.status(500).json({message: err.message})

  }
});

// getting one thing from db 
router.get('/:id', (req, res) => {
    res.send(req.params.id)

})

// posting to db

router.post('/', async (req, res) => {
    const mathLesson  = new mathLesson({
        lesson: req.body.lesson,
        assignment: req.body.assignment

    })
    try {
        const newLesson = await mathLesson.save()
            res.status(201).json(newLesson )   
    }catch(err){
        res.status(400).json({message: err.message})
    }

})

// Delete something from DB
router.delete('/:id',(req, res) => {

})


module.exports = router;