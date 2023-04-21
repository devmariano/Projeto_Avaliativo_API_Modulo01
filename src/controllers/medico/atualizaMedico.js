const Medico = require('../../models/medico');

async function atualizaMedico(request, response) {
    try {
        const medico = await Medico.findByPk(request.params.id)

        if(!medico) 
         return response
            .status(404)
            .json({message: "Médico não localizado"})

        await Medico.update({
            nome_completo: request.body.nome_completo || medico.nome_completo,
            genero: request.body.genero || medico.genero,
            data_nascimento: request.body.data_nascimento || medico.data_nascimento,
            cpf: request.body.cpf || medico.cpf, 
            telefone: request.body.telefone || medico.telefone,
            instituicao_ensino_formacao: request.body.instituicao_ensino_formacao || medico.instituicao_ensino_formacao,
            crm_uf: request.body.crm_uf || medico.crm_uf,
            especializacao_clinica: request.body.especializacao_clinica || medico.especializacao_clinica
        }, {
            where: {
                id: request.params.id
            }
        })
        
        const medicoAtualizado = await Medico.findByPk(request.params.id)
        response.json(medicoAtualizado)
    } catch (error) {
        console.error('Não foi possível processar a requisição', error.message)
        response
        .status(500)
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = atualizaMedico