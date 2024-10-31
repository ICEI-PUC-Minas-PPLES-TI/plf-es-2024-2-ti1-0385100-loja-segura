// Trabalho Interdisciplinar 1 - Aplicações Web
//
// Esse módulo implementa uma API RESTful baseada no JSONServer
// O servidor JSONServer fica hospedado na seguinte URL
// https://jsonserver.rommelpuc.repl.co/contatos
//
// Para montar um servidor para o seu projeto, acesse o projeto 
// do JSONServer no Replit, faça o FORK do projeto e altere o 
// arquivo db.json para incluir os dados do seu projeto.
//
// URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
//
// Autor: Rommel Vieira Carneiro
// Data: 03/10/2023

const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

/** Adaptado por @alvimdev */

const server = express();
const routerPath = path.join(__dirname, 'db/db.json');
const router = jsonServer.router(routerPath);
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);

// Usar o router do JSON Server para a API
server.use('/', router);

// Servir arquivos estáticos da pasta "public"
server.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => {
  console.log(`JSON Server is running em http://localhost:3000`)
})