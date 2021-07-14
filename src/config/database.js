const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);

module.exports = knex;

// Exemplos

// knex("users").insert({
//   name: "Teste",
//   email: "teste@teste.com",
//   password: "teste"
// }).then(data => console.log(data));

// knex("users").select("*").then(result => console.log(result));
// knex("users").first().then(result => console.log(result));
// knex("users").where({id: 1}).then(result => console.log(result));