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
const excluiPaciente = require("./src/controllers/paciente/excluiPaciente");
const listaPaciente = require("./src/controllers/paciente/listaPaciente");
const listaTodosPacientes = require("./src/controllers/paciente/listaTodosPacientes");
const atualizaPaciente = require("./src/controllers/paciente/atualizaPaciente");
const atualizaStatusPaciente = require("./src/controllers/paciente/atualizaStatusPaciente");
const excluiMedico = require("./src/controllers/medico/excluiMedico");
const listaMedico = require("./src/controllers/medico/listaMedico");
const listaTodosMedicos = require("./src/controllers/medico/listaTodosMedicos");
const atualizaMedico = require("./src/controllers/medico/atualizaMedico");
const atualizaStatusMedico = require("./src/controllers/medico/atualizaStatusMedico");
const excluiEnfermeiro = require("./src/controllers/enfermeiro/excluiEnfermeiro");
const listaEnfermeiro = require("./src/controllers/enfermeiro/listaEnfermeiro");
const listaTodosEnfermeiros = require("./src/controllers/enfermeiro/listaTodosEnfermeiros");
const atualizaEnfermeiro = require("./src/controllers/enfermeiro/atualizaEnfermeiro");
const atendimento = require("./src/controllers/atendimento/atendimento");
const listaAtendimento = require("./src/controllers/atendimento/listaAtendimento");

//instancia express como objeto
const app = express()
//obrigatório pois será utilizado json nas requisições
app.use(express.json()) 

//ROTAS PACIENTES
app.post('/api/pacientes', validaPaciente, cadastraPaciente)
app.delete('/api/pacientes/:id', excluiPaciente)
app.get('/api/pacientes/:id', listaPaciente)
app.get('/api/pacientes/', listaTodosPacientes)
app.put('/api/pacientes/:id', atualizaPaciente)
app.put('/api/pacientes/:id/status', atualizaStatusPaciente)

//ROTAS MEDICOS
app.post('/api/medicos', validaMedico, cadastraMedico)
app.delete('/api/medicos/:id', excluiMedico)
app.get('/api/medicos/:id', listaMedico)
app.get('/api/medicos/', listaTodosMedicos)
app.put('/api/medicos/:id', atualizaMedico)
app.put('/api/medicos/:id/status', atualizaStatusMedico)

//ROTAS ENFERMEIROS
app.post('/api/enfermeiros', validaEnfermeiro, cadastraEnfermeiro)
app.delete('/api/enfermeiros/:id', excluiEnfermeiro)
app.get('/api/enfermeiros/:id', listaEnfermeiro)
app.get('/api/enfermeiros/', listaTodosEnfermeiros)
app.put('/api/enfermeiros/:id', atualizaEnfermeiro)

//ROTA ATENDIMENTO
app.post('/api/atendimentos', atendimento)
app.get('/api/atendimentos', listaAtendimento)


//verifica se conexao obteve sucesso e sincroniza os models ao BD
conexao.authenticate();
conexao.sync({alter: true})

//inicializa/sobe api na porta 5151
app.listen(process.env.PORT_API, () => {
    console.log("::API LABMedicine online::")
})
