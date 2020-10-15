import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();  

app.use(express.json()); //dizer ao express que queremos trabalhar com JSON
app.use(routes);

app.listen(3333);

// Rota = conjunto
// Recurso = user

// Metodos HTTP = GET, POST, PUT, DELETE
// GET = Buscar informação (lista, item, etc.)
// POST = Criar/Guardar informação nova
// PUT = Editar informação
// DELETE = Apagar informação

// Parametros
// Query Params: http://localhost:3333/users?search=Diogo&page=2 -> contexto de parametros mais "opcionais", opções como filtragem e pesquisa
// Route Params: http://localhost:3333/users/1 -> Identificar um recurso
// Body: http://localhost:3333/users -> Corpo do request, dados que não cabem nos outros parametros, geralmente são provenientes de formulários

//app.post('/users/:id', (request, response) => {
    //console.log(request.query); aceder a query params
    //console.log(request.params); /:{nomeDoParam}
    //console.log(request.body); recebe o body
    //return response.json({ message: 'Hello World!' });
//})

// REQUISIÇÃO <-> RESPOSTA

// Driver Nativo, Query Builder, ORM