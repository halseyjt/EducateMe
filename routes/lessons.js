const express = require('express');
const router = express.Router()

// getting all info from DB
router.get('/', (req, res) => {
res.send('GOOD TEST')
})

// getting one thing from db 
router.get('/:id', (req, res) => {

})

// posting to db

router.post('/', (req, res) => {

})

// Delete something from DB
router.delete('/:id',(req, res) => {

})


module.exports = router;