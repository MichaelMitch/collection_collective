const express = require('express')
const db = require("../db")
const router = express.Router()

router.get('/', (req, res) => {
  db.getMixes()
  .then(resp =>{
    res.json(resp)
  })
  .catch(err => {
    res.status(500).send('Database error: ' + err.message)
  })
})

router.get('mix', (req, res) => {
  


})


module.exports =  router