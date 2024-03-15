const express = require('express');

const app = express();

const rotas = require('./roteador');

app.use(rotas);

app.listen(5000);