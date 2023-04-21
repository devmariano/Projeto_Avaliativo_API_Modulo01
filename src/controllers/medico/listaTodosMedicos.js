const Medico = require('../../models/medico');

async function listaMedico(request, response) {
    try {
        const filtros = request.query // query param /api/medicos?status=PARAMETRO 
        
        if(filtros.status) {

            if (!["ATIVO","INATIVO",].includes(filtros.status)) {
            
            return response
            .status(400)
            .json({ message: 'O status deve ser ATIVO ou INATIVO'})
            }
            const medicos = await Medico.findAll(
                {
                    where: {
                        estado_no_sistema: filtros.status
                    }
                }
            ) 
            response
            .status(200)
            .json(medicos) 
        } else {
            const medicos = await Medico.findAll() 
            response
            .status(200)
            .json(medicos) 
        }

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaMedico