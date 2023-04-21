const Atendimento = require('../../models/atendimento');
const Medico = require('../../models/medico')
const Paciente = require('../../models/paciente')

async function listaAtendimento(request, response) {
    try {
        const filtros = request.query // query param /api/atendimentos?medico=PARAMETRO 

        if (filtros.medico) {

            const medico = await Medico.findByPk(filtros.medico);
            if (!medico) {
                return response
                    .status(404)
                    .json({ message: 'Médico não encontrado' });
            }

            const atendimentos = await Atendimento.findAll(
                {
                    where: {
                        medico_id: filtros.medico
                    }
                }
            )
            if (atendimentos.length == 0) {
                return response
                    .status(404)
                    .json({ message: 'Médico não realizou atendimentos' });
            }
            response
                .status(200)
                .json(atendimentos)
        } else if (filtros.paciente) {
            const paciente = await Paciente.findByPk(filtros.paciente);
            if (!paciente) {
                return response
                    .status(404)
                    .json({ message: 'Paciente não encontrado' });
            }
            const atendimentos = await Atendimento.findAll(
                {
                    where: {
                        paciente_id: filtros.paciente
                    }
                }
            )
            if (atendimentos.length == 0) {
                return response
                    .status(404)
                    .json({ message: 'Paciente não teve atendimentos' });
            }
            response
                .status(200)
                .json(atendimentos)
        } else {
            const atendimentos = await Atendimento.findAll()
            response
                .status(200)
                .json(atendimentos)
        }

    } catch (error) {
        return response
            .status(500)
            .json({ message: "Não foi possível processar a requisição" })
    }
}

module.exports = listaAtendimento