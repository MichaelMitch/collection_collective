const express = require('express')
const db = require("../db/db")
const router = express.Router()

router.get('/mixes', (req, res) => {
  db.getMixes()
  .then(resp =>{
    res.json(resp)
  })
  .catch(err => {
    res.status(500).send('Database error: ' + err.message)
  })
})

router.get('/:id', (req, res) => {
  id = req.params.id
  db.getSongs(id)
  .then(resp => {
    res.json(resp)
  })
  .catch(err => {
    res.status(500).send('Database error: ' + err.message)
  })
})


module.exports =  router
