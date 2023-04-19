const Medico = require("../../models/medico");

async function cadastraMedico(request, response) {
    
    try {
        const dadosMedico = {
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_nascimento: request.body.data_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            instituicao_ensino_formacao: request.body.instituicao_ensino_formacao,
            crm_uf: request.body.crm_uf,
            especializacao_clinica: request.body.especializacao_clinica,
            estado_no_sistema: request.body.estado_no_sistema
        }
        
        const MedicoExiste = await Medico.findOne({
            where: {cpf: dadosMedico.cpf}
        })

        if(MedicoExiste) 
            return response.status(409).json({message: "Medico já cadastrado"})
        
        const novoMedico = await Medico.create(dadosMedico)
        return response.status(201).json(novoMedico)

    } catch (error) {
        console.error('Requisição não processada', error.message)
        response.status(400).json({message: "Requisição não processada"})
    }
}

module.exports = cadastraMedico;