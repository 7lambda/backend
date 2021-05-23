const db = require('../data/migrations/dbConfig')


function getAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).first()
}

async function Add(data) { // done for you
    const [userId] = await db('users').insert(data)
    return db('users as u').where('user_id', userId).select('u.username', 'u.user_id')
  }

  module.exports = {
      Add,
      findBy,
      getAll,
  }
