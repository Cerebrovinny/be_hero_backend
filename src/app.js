const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP:
  * GET: Buscar uma informacao do backend
  * POST: Criar uma informacao no backend
  * PUT: ALterar uma informacao no backend
  * DELETE: Deletar uma informacao no backend
  */

  /**
   * Tipos de parametros:
   * Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginacao)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
   */


module.exports = app;