const path = require('path')
const express = require('express')

const mainRoutes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/mixes', mainRoutes )

module.exports = server
