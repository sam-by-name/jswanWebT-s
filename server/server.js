const express = require('./express')
const path = require('path')

const something = require('./something')

const server = express()

server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/something', something)

module.exports = server
