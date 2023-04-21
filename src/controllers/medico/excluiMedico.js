const Medico = require("../../models/medico");

async function excluiMedico(request, response) {
  try {
    const medico_id = request.params.id;
    const medico = await Medico.findByPk(medico_id);

    if (!medico) {
      return response
        .status(404)
        .json({message: "Este médico não existe"});
    };

    await medico.destroy();

    return response
      .status(204)
      .json();

  } catch (error) {
    response
    .status(500)
    .json({ message: "Não foi possível processar a requisição" });
  };
};

module.exports = excluiMedico;