const Enfermeiro = require('../../models/enfermeiro');

async function listaEnfermeiro(request, response) {
    try {
        const enfermeiro_id = await Enfermeiro.findByPk(request.params.id)

        if(!enfermeiro_id) return response
        .status(404) 
        .json({message: "Enfermeiro não encontrado"})

        return response
        .status(200) 
        .json(enfermeiro_id)

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaEnfermeiro