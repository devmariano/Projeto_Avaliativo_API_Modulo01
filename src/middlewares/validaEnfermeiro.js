const yup = require("yup");
//yup é um modulo de validação de dados
const validacao = yup.object().shape({
    nome_completo: yup
    .string("O nome deve ser uma string")
    .required("Nome é obrigatório"),
    genero: yup
    .string(),
    data_nascimento: yup
    .date()
    .required("Data de nascimento é obrigatório"),
    //validar cpf com yup
    cpf: yup
    .string()
    .required('CPF é obrigatório')
    .matches(/^\d{11}$/, 'CPF inválido')
    .test('cpf', 'CPF inválido', (value) => {
      const cpf = value.replace(/\D/g, '');
      let sum;
      let rest;
      sum = 0;
      if (cpf === '00000000000') {
        return false;
      }
      for (let i = 1; i <= 9; i += 1) {
        sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
      }
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) {
        rest = 0;
      }
      if (rest !== parseInt(cpf.substring(9, 10), 10)) {
        return false;
      }
      sum = 0;
      for (let i = 1; i <= 10; i += 1) {
        sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
      }
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) {
        rest = 0;
      }
      if (rest !== parseInt(cpf.substring(10, 11), 10)) {
        return false;
      }
      return true;
    }),
    telefone: yup
    .string(),
    instituicao_ensino_formacao: yup
    .string()
    .required("Instituição de formação é obrigatório"),
    cofen_uf: yup
    .string()
    .required("COFEN é obrigatório")
})

function validaEnfermeiro(request, response, next) {
//console.log("dado original", request.body)
//quando o validade sync encontra alguam inconsistencia ele lança uma excessão pr isso utilizar dentro do try 
//console.log(validacao.validateSync(request.body))
try {
    validacao.validateSync(request.body)
    next()
} catch (error) {
    //pega o texto do erro gerado no yup através do error.message
    //se der o response de erro a requisição é barrada no  middleware mesmo, não passa pra frente
response.status(400).json({message: error.message})
}
}

module.exports = validaEnfermeiro;