const db = require("../config/database");

module.exports = {
  Query: {
    // Recebe os parametros (ex: parms.id)
    async getUser(_, { id }) {
      return await db("users").where({ id }).first();
    },

    async getUsers() {
      return await db("users")
    }
  },
  Mutation: {
    async createUser(_, { input }) {
      const result = await db("users").insert({
        name: input.name,
        email: input.email,
        password: input.password
      });

      // Retorna os dados do usuário inserido
      const id = result[0];
      return await db("users").where({ id }).first();
    }
  }
}