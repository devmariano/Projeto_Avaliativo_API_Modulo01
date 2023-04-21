const Medico = require('../../models/medico');

async function atualizaStatusMedico(request, response) {
    try {
        const id = request.params.id 
        const medico = await Medico.findByPk(id)

        if(!medico) {
            return response
            .status(404)
            .json({message: 'Médico não encontrado'})
        }

        if (![
            'ATIVO',
            'EM_ATENDIMENTO',
            'INATIVO']
            .includes(request.body.estado_no_sistema)) {
            return response
            .status(400)
            .json({ message: 'O status deve ser ATIVO ou INATIVO' })
        }


        medico.estado_no_sistema = request.body.estado_no_sistema

        await medico.save()

        return response.json(medico)
        
    } catch (error) {
        return response
        .status(500)
        .json({ message: 'Não foi possível processar a requisição' })
    }
}


module.exports = atualizaStatusMedico