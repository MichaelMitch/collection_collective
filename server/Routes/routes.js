const express = require('express')
const db = require("../db")
const router = express.Router()

router.get('/', (req, res) => {
  db.getMixes()
  .then(resp =>{
    res.json(mixes)
  })
  .catch(err => {
    res.status(500).send('Database error: ' + err.message)
  })
})

module.exports =  router