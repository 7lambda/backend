const db = require('../data/migrations/dbConfig')

function addFood(data) {
    return db('foods').insert(data, ['*'])
    
}
function findFoodByEventId(event_id) {
    return db('foods').where({event_id})
}


async function assignFoodToAttendee(food_id, user_id) {
    let data = await db('foods as f').where({food_id}).select('f.event_id')
    let item = {}
    item.event_id = `${data[0].event_id}`
    item.user_id = user_id
    await db('attendee').insert(item)
    return db('foods').where({food_id}).update({user_id}, ['*'])

}
function nuked(food_id) {
    return db('foods').where({food_id}).del()
 }
module.exports = {
    addFood,
    findFoodByEventId,
    assignFoodToAttendee,
    nuked
}
