require("dotenv").config(); // requisitar na primeira linha para atender todas dependencias abaixo

const express = require('express')
const conexao = require('./src/database')


//instancia express como objeto
const app = express()
app.use(express.json()) // obrigatório


//verifica se conexao obteve sucesso
conexao.sync({alter: true})

//inicializa/sobe api na porta 5656
app.listen(process.env.PORT_API, () => {
    console.log("::API LABMedicine online::")
})