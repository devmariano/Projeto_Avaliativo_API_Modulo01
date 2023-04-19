
const Paciente = require("../../models/paciente");

async function cadastraPaciente(request, response) {
    
    try {
        const dadosPaciente = {
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_nascimento: request.body.data_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            contato_emergencia: request.body.contato_emergencia,
            lista_alergias: request.body.lista_alergias,
            lista_cuidados: request.body.lista_cuidados,
            convenio: request.body.convenio,
            status_atendimento: request.body.status_atendimento
        }
        
        const pacienteExiste = await Paciente.findOne({
            where: {cpf: dadosPaciente.cpf}
        })

        if(pacienteExiste) 
            return response.status(409).json({message: "Paciente já cadastrado"})
        
        const novoPaciente = await Paciente.create(dadosPaciente)
        return response.status(201).json(novoPaciente)

    } catch (error) {
        console.error('Requisição não processada', error.message)
        response.status(400).json({message: "Requisição não processada"})
    }
}

module.exports = cadastraPaciente;