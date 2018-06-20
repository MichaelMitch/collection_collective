const server = require('./server')

const port = process.env.PORT || 3000

server.listen(PORT, function () {
        console.log('listening on PORT: ' PORT)
})