const { Sequelize } = require("sequelize");
const conexao = require("../database");

const Paciente = conexao.define("paciente", {
  
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
  contato_emergencia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lista_alergias: {
    type: Sequelize.STRING,
  },
  lista_cuidados: {
    type: Sequelize.STRING,
  },
  convenio: {
    type: Sequelize.STRING,
  },
  status_atendimento: Sequelize.ENUM(
    "AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"
  ),
  total_atendimentos: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }

});

module.exports = Paciente;