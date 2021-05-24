const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const server = express()
const Auth = require('./Auth/auth-router')
const Event = require('./Events/event-router')
const Food = require('./Foods/foods-router')

server.use(express.static(path.join(__dirname, '../client/build')))
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', Auth )
server.use('/api/events', Event )
server.use('/api/foods', Food )

server.use('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})


server.use((err, req, res, next) =>{
    res.status(500).json({
        message:err.message,
        stack: err.stack
    })
})

module.exports = server;
