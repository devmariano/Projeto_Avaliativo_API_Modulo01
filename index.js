//permite carregar as variaveis de ambiente do arquivo .env
require("dotenv").config(); 

const express = require('express')
const conexao = require('./src/database')
//instancia models 
const Paciente = require('./src/models/paciente');
const Medico = require('./src/models/medico');
const Enfermeiro = require('./src/models/enfermeiro');
const Atendimento = require('./src/models/atendimento');

//rotas
const cadastraPaciente = require('./src/controllers/paciente/cadastraPaciente');
const cadastraMedico = require('./src/controllers/medico/cadastraMedico');
const cadastraEnfermeiro = require('./src/controllers/enfermeiro/cadastraEnfermeiro');


const validaPaciente = require("./src/middlewares/validaPaciente");
const validaMedico = require("./src/middlewares/validaMedico");
const validaEnfermeiro = require("./src/middlewares/validaEnfermeiro");


//instancia express como objeto
const app = express()
//obrigatório pois será utilizado json nas requisições
app.use(express.json()) 

//ROTAS PACIENTES
app.post('/api/pacientes', validaPaciente, cadastraPaciente)

//ROTAS MEDICOS
app.post('/api/medicos', validaMedico, cadastraMedico)

//ROTAS ENFERMEIROS
app.post('/api/enfermeiros', validaEnfermeiro, cadastraEnfermeiro)


//verifica se conexao obteve sucesso e sincroniza os models ao BD
conexao.authenticate();
conexao.sync({alter: true})

//inicializa/sobe api na porta 5151
app.listen(process.env.PORT_API, () => {
    console.log("::API LABMedicine online::")
})
