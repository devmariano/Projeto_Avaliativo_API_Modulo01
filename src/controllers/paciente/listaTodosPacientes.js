const Paciente = require('../../models/paciente');

async function listaPaciente(request, response) {
    try {
        const filtros = request.query // query param /api/pacientes?status=PARAMETRO 
        
        if(filtros.status) {

            if (!["AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"].includes(filtros.status)) {
            
            return response
            .status(400)
            .json({ message: 'O status deve ser AGUARDANDO_ATENDIMENTO,EM_ATENDIMENTO,ATENDIDO ou NAO_ATENDIDO'})
            }
            const pacientes = await Paciente.findAll(
                {
                    where: {
                        status_atendimento: filtros.status
                    }
                }
            ) 
            response
            .status(200)
            .json(pacientes) 
        } else {
            const pacientes = await Paciente.findAll() 
            response
            .status(200)
            .json(pacientes) 
        }

    } catch (error) {
        return response
        .status(500) 
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = listaPaciente