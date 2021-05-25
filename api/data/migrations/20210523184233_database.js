exports.up = function (knex) {
  return knex.schema
    .createTable('users', users => {
      users.increments('user_id');
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.string('email', 255).notNullable();
    })
    .createTable('events', events => {
      events.increments('event_id');
      events.string('event_name', 256).notNullable().unique();
      events.string('date', 256).notNullable();
      events.string('time', 256).notNullable();
      events.string('state', 256).notNullable();
      events.string('city', 256).notNullable();
      events.string('street_address', 256).notNullable();
      events.integer('zip', 8).notNullable();
      events.integer('user_id')
        .notNullable()
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      events.integer('max_attendee').notNullable();
      events.string('img_url')
    })
    .createTable('request', request => {
      request.increments('request_id')
      request.integer('user_id', 256)
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      request.integer('event_id', 256)
        .notNullable()
        .unsigned()
        .references('event_id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('attendeeandfood', attendeeandfood => {
      attendeeandfood.increments('attendeeandfood_Id');
      attendeeandfood.string('food_name', 256)
      attendeeandfood.integer('user_id', 256)
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      attendeeandfood.integer('event_id', 256)
        .notNullable()
        .unsigned()
        .references('event_id')
        .inTable('events')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('foods')
    .dropTableIfExists('request')
    .dropTableIfExists('attendee')
    .dropTableIfExists('events')
    .dropTableIfExists('users')
};
