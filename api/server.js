const express = require('express')
const server = express()
const path = require('path')
const cors = require('cors')
const authRouter = require('./Auth/auth-router')

server.use(express.static(path.join(__dirname, '../client/build')))
server.use(cors())
server.use(express.json())

server.get('/api', (req,res)=>{
    res.json({message: 'api is working'})
})
server.use('/api/auth', authRouter);

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