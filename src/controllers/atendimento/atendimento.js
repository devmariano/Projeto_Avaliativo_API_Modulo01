const Atendimento = require("../../models/atendimento")
const Medico = require('../../models/medico')
const Paciente = require('../../models/paciente')

async function createAtendimento(request, response) {

    
    try {
        const dadosAtendimento = {
            paciente_id: request.body.paciente_id,
            medico_id: request.body.medico_id
        }

        if(!dadosAtendimento.paciente_id || !dadosAtendimento.medico_id) {
            return response.status(400).json({message: 'Ids ausentes'})
        }

        const paciente_id = await Paciente.findByPk(dadosAtendimento.paciente_id)
        const medico_id = await Medico.findByPk(dadosAtendimento.medico_id)

        if(!paciente_id) {
            return response.status(404).json({message: 'Paciente não existe'})
        }

        if(!medico_id) {
            return response.status(404).json({message: 'Médico não existe'})
        }

       const atendimento = await Atendimento.create(dadosAtendimento)

       // o incremento do contador médico e paciente e atualização do status do paciente 
       // foram definidos no model atendimento com o metodo afterCreate do sequelize

        response.json(atendimento)
    
    } catch (error) {
        console.log(error)
        return response.status(500).json({message: 'Não possivel processar a solicitacao'})
    }

}

module.exports = createAtendimento