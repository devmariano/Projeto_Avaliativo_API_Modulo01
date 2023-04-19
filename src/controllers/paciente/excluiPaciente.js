const Paciente = require("../../models/paciente");

async function excluiPaciente(request, response) {
  try {
    const paciente_id = request.params.id;
    const paciente = await Paciente.findByPk(paciente_id);

    if (!paciente) {
      return response
        .status(404)
        .json({message: "Este paciente não existe"});
    };

    await paciente.destroy();

    //sem necessidade de response body
    return response
      .status(204)
      .json();

  } catch (error) {
    response
    .status(500)
    .json({ message: "Não foi possível processar a requisição" });
  };
};

module.exports = excluiPaciente;