const Enfermeiro = require('../../models/enfermeiro');

async function listaEnfermeiro(request, response) {
    try {
        
        const enfermeiros = await Enfermeiro.findAll()

        if(!enfermeiros) return response
        .status(404) //not found
        .json({message: "Lista de enfermeiros sem dados"})

        return response
        .status(200) //ok
        .json(enfermeiros)

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaEnfermeiro