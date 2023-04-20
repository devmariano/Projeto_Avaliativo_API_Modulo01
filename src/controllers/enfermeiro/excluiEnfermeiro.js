const Enfermeiro = require("../../models/enfermeiro");

async function excluiEnfermeiro(request, response) {
  try {
    const enfermeiro_id = request.params.id;
    const enfermeiro = await Enfermeiro.findByPk(enfermeiro_id);

    if (!enfermeiro) {
      return response
        .status(404)
        .json({message: "Este enfermeiro não existe"});
    };

    await enfermeiro.destroy();

    return response
      .status(204)
      .json();

  } catch (error) {
    response
    .status(500)
    .json({ message: "Não foi possível processar a requisição" });
  };
};

module.exports = excluiEnfermeiro;