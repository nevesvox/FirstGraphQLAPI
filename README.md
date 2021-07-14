## DEV (Run Project)🖥
* Clonar o projeto para a máquina;
* Instalar as dependências utilizando o `npm i`;
* Criar na aplicação o arquivo `.env` na pasta `/src` com a seguinte estrutura:
  module.exports = {
    password: "secret"
  }
  Onde o password será a senha do seu MySQL local;
* Possuir o MySql instalado na máquina (Para rodar o servidor Local);
* Possuir o Knex instalado na máquina `npm i -g knex`;
* Realizar a migration utilizando o `knex migrate:latest`;
* Para executar a API: `node server.js`;
* Para abrir o Playground(GraphiQL) abrir no navegador `localhost:4000/api`;


## Exemplos de Querys e Mutations
#### Query
`{
    getUsers {
      name
      email
    }
    
    getUser(id: 1) {
      password
    }
  }`

#### Mutation
 `mutation {
    createUser(input: {name: "Gabriel Neves", email: "gabriel@teste.com", password: "123456"}) {
      name
      id
    }
  }`
