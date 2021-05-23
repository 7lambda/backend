require('dotenv').config()
const server = require('./api/server');
const {PORT} = require('./api/auth/secret');

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
