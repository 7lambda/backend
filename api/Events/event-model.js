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

async function UserIdwithEventId (event_id){
    console.log(event_id)
    const data = await db('events').where({event_id}).first()
    return data.user_id
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
    nuked,
    UserIdwithEventId
}
