const bcrypt = require('bcryptjs')
exports.seed = function (knex) {
  const hashed = (data) => bcrypt.hashSync(data, 8)
  return knex('users').insert([
    { username: "roman", password: hashed("123"), email: "roman@gmail.com" },
    { username: "dylan", password: hashed("123"), email: "dylan@gmail.com" },
    { username: "daniel", password: hashed("123"), email: "daniel@gmail.com" },
    { username: "kyle", password: hashed("123"), email: "kyle@gmail.com" },
    { username: "ben", password: hashed("123"), email: "ben@gmail.com" },
    { username: "issac", password: hashed("123"), email: "issac@gmail.com" },
    { username: "alex", password: hashed("123"), email: "alex@gmail.com" },
    { username: "francis", password: hashed("123"), email: "francis@gmail.com" },
    { username: "krisda", password: hashed("123"), email: "krisda@gmail.com" },
    { username: "gabe", password: hashed("123"), email: "gabe@gmail.com" },
    { username: "george", password: hashed("123"), email: "george@gmail.com" },
    { username: "jaison", password: hashed("123"), email: "jaison@gmail.com" },
    { username: "MrD", password: hashed("123"), email: "MrD@gmail.com" },
    { username: "MKrab", password: hashed("123"), email: "MKrab@gmail.com" },
    { username: "Sbob", password: hashed("123"), email: "Sbob@gmail.com" },
    { username: "woody", password: hashed("123"), email: "woody@gmail.com" },
    { username: "jonnyTest", password: hashed("123"), email: "jonnyTest@gmail.com" }
  ]);
};
