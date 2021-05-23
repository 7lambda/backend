require('dotenv').config()
const server = require('./api/server.js');
const {PORT} = require('./api/auth/secret');
console.log(process.env.PORT)

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
