const Paciente = require('../../models/paciente');

async function atualizaPaciente(request, response) {
    try {
        const paciente = await Paciente.findByPk(request.params.id)

        if(!paciente) 
         return response
            .status(404)
            .json({message: "Paciente não localizado"})

        await Paciente.update({
            nome_completo: request.body.nome_completo || paciente.nome_completo,
            genero: request.body.genero || paciente.genero,
            data_nascimento: request.body.data_nascimento || paciente.data_nascimento,
            cpf: request.body.cpf || paciente.cpf, 
            telefone: request.body.telefone || paciente.telefone,
            contato_emergencia: request.body.contato_emergencia || paciente.contato_emergencia,
            lista_alergias: request.body.lista_alergias || paciente.lista_alergias,
            lista_cuidados: request.body.lista_cuidados || paciente.lista_cuidados,
            convenio: request.body.convenio || paciente.convenio
        }, {
            where: {
                id: request.params.id
            }
        })
        
        const pacienteAtualizado = await Paciente.findByPk(request.params.id)
        response.json(pacienteAtualizado)
    } catch (error) {
        console.error('Não foi possível processar a requisição', error.message)
        response
        .status(400)
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = atualizaPaciente