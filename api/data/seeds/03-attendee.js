exports.seed = function (knex) {

  return knex('request').insert([
    { event_id: 2, user_id: 4 },
    { event_id: 2, user_id: 5 },
    { event_id: 3, user_id: 4 },
    { event_id: 4, user_id: 5 },
    { event_id: 1, user_id: 6 },
    { event_id: 2, user_id: 6 },
    { event_id: 3, user_id: 6 },
    { event_id: 4, user_id: 6 },

  ]);
};
