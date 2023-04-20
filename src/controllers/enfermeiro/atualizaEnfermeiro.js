const Enfermeiro = require('../../models/enfermeiro');

async function atualizaEnfermeiro(request, response) {
    try {
        const enfermeiro = await Enfermeiro.findByPk(request.params.id)

        if(!enfermeiro) 
         return response
            .status(404)
            .json({message: "Enfermeiro não localizado"})

        await Enfermeiro.update({
            nome_completo: request.body.nome_completo || enfermeiro.nome_completo,
            genero: request.body.genero || enfermeiro.genero,
            data_nascimento: request.body.data_nascimento || enfermeiro.data_nascimento,
            cpf: request.body.cpf || enfermeiro.cpf, 
            telefone: request.body.telefone || enfermeiro.telefone,
            instituicao_ensino_formacao: request.body.instituicao_ensino_formacao || enfermeiro.instituicao_ensino_formacao,
            cofen_uf: request.body.cofen_uf || enfermeiro.cofen_uf
        }, {
            where: {
                id: request.params.id
            }
        })
        
        const enfermeiroAtualizado = await Enfermeiro.findByPk(request.params.id)
        response.json(enfermeiroAtualizado)
    } catch (error) {
        response
        .status(500)
        .json({message: "Não foi possível processar a requisição"})
    }
}

module.exports = atualizaEnfermeiro