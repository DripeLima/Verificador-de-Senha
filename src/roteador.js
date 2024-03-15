const express = require('express');

const rotas = express();

const { verificadorSenha } = require('./controladores/controlador');

rotas.get("/login", verificadorSenha);

module.exports = rotas;