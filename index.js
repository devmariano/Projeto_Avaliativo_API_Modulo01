//permite carregar as variaveis de ambiente do arquivo .env
require("dotenv").config(); 

const express = require('express')
const conexao = require('./src/database')
//instancia models 
const Paciente = require('./src/models/paciente');
const Medico = require('./src/models/medico');
const Enfermeiro = require('./src/models/enfermeiro');
const atendimento = require('./src/models/atendimento');


//instancia express como objeto
const app = express()
//obrigatório pois será utilizado json nas requisições
app.use(express.json()) 


//verifica se conexao obteve sucesso e sincroniza os models ao BD
conexao.authenticate();
conexao.sync({alter: true})

//inicializa/sobe api na porta 5656
app.listen(process.env.PORT_API, () => {
    console.log("::API LABMedicine online::")
})