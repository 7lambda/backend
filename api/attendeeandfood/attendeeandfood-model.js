const db = require('../data/migrations/dbConfig')

function addFood(data) {
    return db('attendeeandfood').insert(data, ['*'])
    
}
function findFoodByEventId(event_id) {
    return db('attendeeandfood').where({event_id})
}
function comewithoutFood(data) {
    return db('attendeeandfood').insert(data, ['*'])
}

async function assignFoodToAttendee(attendeeandfood_Id , user_id, is_attendings ) {
    await db('attendeeandfood').where({attendeeandfood_Id}).update({user_id} , ['*'])
    return  await db('attendeeandfood').where({attendeeandfood_Id}).update({is_attendings} , ['*'])
}
function nuked(attendeeandfood_Id) {
    return db('attendeeandfood').where({attendeeandfood_Id}).del()
 }
module.exports = {
    addFood,
    findFoodByEventId,
    assignFoodToAttendee,
    nuked,
    comewithoutFood
}
