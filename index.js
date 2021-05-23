require('dotenv').config()
const {PORT} = require('./api/Auth/secret');
const express = require('express')
const path = require('path')
const server = express()
const cors = require('cors')
const authRouter = require('./api/Auth/auth-router')

server.use(express.static(path.join(__dirname, 'client/build')))
server.use(cors())
server.use(express.json())

server.use('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.get('/', (req,res)=>{
    res.json({message: 'api is working'})
})
server.use('/api/auth', authRouter);

server.use((err, req, res, next) =>{
    res.status(500).json({
        message:err.message,
        stack: err.stack
    })
})

server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})

module.exports = server