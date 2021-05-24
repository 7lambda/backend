const db = require('../data/migrations/dbConfig')

function getAll() {
    return db('events')
}
function getByUserId(user_id) {
    return db('events').where({user_id})
}
function getByEventId(event_id) {
    return db('events').where({event_id})
}

function insert(data) {
    return db('events').insert(data, ['*'])
}
function updateevent(event_id, data) {
    return db('events').where({event_id}).update(data, ['*'])
}
function nuked(event_id) {
   return db('events').where({event_id}).del()
}

module.exports = {
    getAll,
    insert,
    getByUserId,
    getByEventId,
    updateevent,
    nuked
}
