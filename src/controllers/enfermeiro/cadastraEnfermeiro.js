const Enfermeiro = require("../../models/enfermeiro");

async function cadastraEnfermeiro(request, response) {
    
    try {
        const dadosEnfermeiro = {
            nome_completo: request.body.nome_completo,
            genero: request.body.genero,
            data_nascimento: request.body.data_nascimento,
            cpf: request.body.cpf,
            telefone: request.body.telefone,
            instituicao_ensino_formacao: request.body.instituicao_ensino_formacao,
            cofen_uf: request.body.cofen_uf
        }
        
        const EnfermeiroExiste = await Enfermeiro.findOne({
            where: {cpf: dadosEnfermeiro.cpf}
        })

        if(EnfermeiroExiste) 
            return response.status(409).json({message: "Enfermeiro já cadastrado"})
        
        const novoEnfermeiro = await Enfermeiro.create(dadosEnfermeiro)
        return response.status(201).json(novoEnfermeiro)

    } catch (error) {
        console.error('Não foi possível processar a requisição', error.message)
        response.status(500).json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = cadastraEnfermeiro;