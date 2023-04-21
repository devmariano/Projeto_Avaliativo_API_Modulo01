const Medico = require('../../models/medico');

async function listaMedico(request, response) {
    try {
        const medico_id = await Medico.findByPk(request.params.id)

        if(!medico_id) return response
        .status(404) 
        .json({message: "Médico não encontrado"})

        return response
        .status(200) 
        .json(medico_id)

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaMedico