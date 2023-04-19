const Paciente = require('../../models/paciente');

async function atualizaStatusPaciente(request, response) {
    try {
        const id = request.params.id // pegando o id enviado
        const paciente = await Paciente.findByPk(id)

        if (![
            'AGUARDANDO_ATENDIMENTO',
            'EM_ATENDIMENTO',
            'ATENDIDO',
            'NAO_ATENDIDO',]
            .includes(request.body.status_atendimento)) {
            return response
            .status(400)
            .json({ message: 'O status deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO' })
        }

        if(!paciente) {
            return response
            .status(404)
            .json({message: 'Paciente não encontrado'})
        }

        paciente.status_atendimento = request.body.status_atendimento

        await paciente.save()

        return response.json(paciente)
        
    } catch (error) {
        return response
        .status(400)
        .json({ message: 'Não possivel processar a solicitacao' })
    }
}


module.exports = atualizaStatusPaciente