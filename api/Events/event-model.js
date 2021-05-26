const db = require('../data/migrations/dbConfig')

function format(e){

    let data = e[0];
    let users = []
    //if e isnt an array runs this to put the 0-1 attendee in the object
    if(data === undefined){
        let newUser = {
            user_id: e.user_id,
            username: e.username,
            attendeeandfood_Id: e.attendeeandfood_Id,
            food_name: e.food_name,
            is_attendings: e.is_attendings
        }
        users.push(newUser);
    }

    if(data !== undefined){
        e.map(user=>{
            let newUser = {
                user_id: user.user_id,
                username: user.username,
                attendeeandfood_Id: user.attendeeandfood_Id,
                food_name: user.food_name,
                is_attendings: user.is_attendings
            }
            users.push(newUser);
        })
    }
    if(data === undefined){
        data = e;
    }
    //builds final formatted object
    let formatted = {
        event_id: data.event_id,
        event_name: data.event_name,
        date: data.date,
        time: data.time,
        state: data.state,
        city: data.city,
        street_address: data.street_address,
        zip: data.zip,
        organizer_id: data.organizer_id,
        max_attendee: data.max_attendee,
        img_url: data.img_url,
        attendees: users
    }
    
    return formatted;
}


//  function getAll() {
//     return db('events as e')
//     .leftJoin("attendeeandfood as af", 'e.event_id','af.event_id')
//     .leftJoin('users as u', 'af.user_id', 'u.user_id')
//     .orderBy('e.event_id')
//     .then(data => {
//         //sets id to the first event id in the array
//         let id = data[0].event_id;
//         //2d array
//         let arr = []
//         //placeholder array
//         let eventArr = [];
//         //seperates every entry into the 2d array arr, every column corresponds to an event
//         data.map( (e, index) => {
//             if(e.event_id === id){
//                 eventArr.push(e);
//             }
//             if(e.event_id !== id){
//                 arr.push(eventArr);
//                 eventArr = [];
//                 eventArr.push(e);
//                 id++;
//             }
//             if(index == data.length-1)
//             {
//                 arr.push(eventArr);
//             }
//         })
//         let newdata = []
//         arr.map(e => {
//             newdata.push(format(e))
//             })
//         return newdata;
//     })
// }

async function getAll() {
    const events = await db('events')
    const attendeeandfood = await db('attendeeandfood')
    const data = await events.map(event =>{
        event.attendees = attendeeandfood.filter(id =>
            id.event_id === event.event_id)
            return event
        })
        return data
}

function getByUserId(user_id) {
    return db('events as e')
    .leftJoin("attendeeandfood as af", 'e.event_id','af.event_id')
    .leftJoin('users as u', 'af.user_id', 'u.user_id')
    .where("u.{user_id}", user_id)
    .then(data => {return format(data);})
    
}
function getByEventId(event_id) {
    return db('events as e')
    .leftJoin("attendeeandfood as af", 'e.event_id','af.event_id')
    .leftJoin('users as u', 'af.user_id', 'u.user_id')
    .where("e.event_id",event_id)
    .then(data => {
        console.log(data)
        return format(data);})
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
