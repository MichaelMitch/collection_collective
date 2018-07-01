const path = require('path')
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const mainRoutes = require('./Routes/routes')
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('api/vi/mixes', mainRoutes )

module.exports = server
