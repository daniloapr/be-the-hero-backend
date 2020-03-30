/**
 * Para evitar ficar reiniciando o node:
 * npm install nodemon -D (O -D cria como uma devDependency)
 * scripts -> start: "nodemon index.js"
 * npm start
 */

/**
 * Métodos HTTP:
 * GET: Buscar alguma informação
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação
 * DELETE: Deletar ums informação
 *
 */
/**
 * Tipos de Parâmetros
 *
 * Query Params: Parâmetros nomeados enviados no rota após "?" (Filtors, paginação)
 * EX: /users?name=Danilo&id=123
 * /users/:id -> users/1
 * Route Params: Pâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição
 */

/**
 * BANCOS DE DADOS
 * SQL: MySql, SQLite, Postgres, Oracle, Microsoft SQL Server
 * NoSql: MongoDB, CouchDB
 *
 * Instalamos a biblioteca knex
 * npm install knex
 * npm install sqlite3
 * npx knex (cria o arquivo knexfile.js)
 * Alterar: development: connection: filename: './src.databasedb.sqlite'
 */

/**
 *  ./ -> referencia a mesma pasta do arquivo index
 *  ;;/ -> Volta uma pasta
 */

//require() -> import
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
