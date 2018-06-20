const path = require ('path')
const express = require('express')
const bodyparser = requrie('body-parser')

const server = express()

server.use(bodyparser.json())
server.user(express.static(path.join(__dirname,"../public")))

module.exports = server