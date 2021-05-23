require('dotenv').config()
const server = require('./api/server')
const {PORT} = require('./api/Auth/secret')

server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})