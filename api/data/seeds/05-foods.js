exports.seed = function (knex) {

  return knex('foods').insert([
    { event_id: 1, user_id: 1, food_name: "pizza" },
    { event_id: 1, user_id: 2, food_name: "pho" },
    { event_id: 1, user_id: 3, food_name: "salsa" },
    { event_id: 1, user_id: null, food_name: "chips" },
    { event_id: 1, user_id: null, food_name: "carrots" },
    { event_id: 2, user_id: 1, food_name: "mash potatoes" },
    { event_id: 2, user_id: null, food_name: "hot cheetos" },
    { event_id: 2, user_id: 3, food_name: "doritios" },
    { event_id: 3, user_id: 1, food_name: "acacia confusa" },
    { event_id: 3, user_id: 2, food_name: "amanita muscaria" },
    { event_id: 3, user_id: null, food_name: "carrtos" },
    { event_id: 4, user_id: 2, food_name: "cheese pizza" },
    { event_id: 4, user_id: 3, food_name: "carrots" },
  ]);
};
