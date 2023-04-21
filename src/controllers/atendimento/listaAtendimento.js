const Atendimento = require('../../models/atendimento');

async function listaAtendimento(request, response) {
    try {
        const filtros = request.query // query param /api/atendimentos?medico=PARAMETRO 
        
        if(filtros.medico) {

  
            const atendimentos = await Atendimento.findAll(
                {
                    where: {
                        medico_id: filtros.medico
                    }
                }
            ) 
            response
            .status(200)
            .json(atendimentos) 
        } else if (filtros.paciente) {

            const atendimentos = await Atendimento.findAll(
                {
                    where: {
                        paciente_id: filtros.paciente
                    }
                }
            ) 
            response
            .status(200)
            .json(atendimentos) 
        }else {
            const atendimentos = await Atendimento.findAll() 
            response
            .status(200)
            .json(atendimentos) 
        }

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaAtendimento