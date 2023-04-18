const { Sequelize } = require("sequelize");
const conexao = require("../database");

const Enfermeiro = conexao.define("enfermeiro", {

  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_completo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  instituicao_ensino_formacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cofen_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  }
  
});

module.exports = Enfermeiro;