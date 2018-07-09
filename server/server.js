const express = require('./express')
const path = require('path')

const auth = require('./routes/authRoutes')
const reddit = require('./routes/redditRoutes')

const server = express()

server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/auth/register', auth)
server.use('/api/vi/reddit', reddit)

module.exports = server
