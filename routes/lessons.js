const express = require('express');
const router = express.Router()
const mathLesson = require('../db/seeds/mathLesson')

// getting all info from DB
router.get("/", async (req, res) => {
  try {
      const mathLessons = await mathLesson.find()

  } catch (err) {
      res.status(500).json({message: err.message})

  }
});

// getting one thing from db 
router.get('/:id', (req, res) => {
    res.send(req.params.id)

})

// posting to db

router.post('/', (req, res) => {

})

// Delete something from DB
router.delete('/:id',(req, res) => {

})


module.exports = router;