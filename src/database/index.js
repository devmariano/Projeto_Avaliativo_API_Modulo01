const Sequelize = require('sequelize')

const conexao = new Sequelize({
  dialect: process.env.DIALECT_DATABASE, // qual banco vai se conecta
  host: process.env.HOST_DATABASE, //onde o banco está ?
  username: process.env.USER_DATABASE, //qual usuario
  password:  process.env.PASSWORD_DATABASE, // qual senha 
  database: process.env.NAME_DATABASE, //qual nome de dados
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
})

module.exports = conexao