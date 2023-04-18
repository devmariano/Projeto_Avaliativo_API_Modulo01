const { Sequelize } = require('sequelize');
const conexao = require('../database');

const Atendimento = conexao.define('atendimento', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  paciente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  medico_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Atendimento.afterCreate(async (atendimento) => {
  // Incrementa o total de atendimentos do paciente
  const paciente = await Paciente.findByPk(atendimento.paciente_id);
  paciente.total_atendimentos += 1;
  paciente.status_atendimento = 'ATENDIDO';
  await paciente.save();

  // Incrementa o total de atendimentos do médico
  const medico = await Medico.findByPk(atendimento.medico_id);
  medico.total_atendimentos += 1;
  await medico.save();
});

module.exports = Atendimento;