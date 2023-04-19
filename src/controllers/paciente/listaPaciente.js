const Paciente = require('../../models/paciente');

async function listaPaciente(request, response) {
    try {
        const paciente_id = await Paciente.findByPk(request.params.id)

        if(!paciente_id) return response
        .status(404) //not found
        .json({message: "Paciente não encontrado"})

        return response
        .status(200) //ok
        .json(paciente_id)

    } catch (error) {
        return response
        .status(400) //bad request
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaPaciente