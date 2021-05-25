exports.seed = function (knex) {
  return knex('events').insert([
    { event_name:"springevent", date:"01/20", time:"2pm", state:"AR",city:"fayetteville", street_address:'123 destiny road',zip:72704, user_id:1, max_attendee:9 },
    { event_name:"summerevent", date:"06/21", time:"1pm", state:"FL",city:"tampa", street_address:'123 tampa road',zip:33614, user_id:1, max_attendee:9 },
    { event_name:"fallEvent", date:"09/20", time:"5pm", state:"CA",city:"San Diego", street_address:'123 sanDiego road',zip:89019, user_id:2, max_attendee:9 },
    { event_name:"winterevent", date:"11/20", time:"11am", state:"CO",city:"denver", street_address:'123 denver road',zip:49091, user_id:3, max_attendee:9 },
  ]);
};
