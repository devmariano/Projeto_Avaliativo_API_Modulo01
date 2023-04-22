
![App Screenshot](https://raw.githubusercontent.com/devmariano/project_files_repo/main/labMedicine_logo2.jpg)
# API LABMedicine 

O Projeto LABMedicine consiste em uma API para gestão hospitalar que permite o cadastro e gestão de médicos, enfermeiros e pacientes além do cadastro e **listagem** de atentimentos.


## 🔧 Tecnologias utilizadas

Projeto foi desenvolvido utilizando a linguagem javascript com Node.js framework e banco de dados PostgreSQL. 

Seguem abaixo as depêndencias externas utilizadas:

| Plugin | Uso |
| ------ | ------ |
| Express | Gerenciar requisições de diferentes verbos HTTP em diferentes URLs |
| Sequelize | Gerenciar modelos da aplicação |
| Pg, Pg-hstore | Cliente PostgreSQL, Serializa e desserializa dados JSON |
| YUP | Validação dos dados |
| Dotenv | Carrega variáveis de ambiente de um arquivo .env |

## 🧰 Técnicas e padrões utilizadas

O projeto foi dividido em uma estruturas de pastas para organizar os models, controllers, middlewares e database

| Local | Uso |
| ------ | ------ |
| /src/models | Contém todos modelos da aplicação |
| /src/controllers | Contém todos modelos da aplicação |
| /src/middlewares | Contém os middlewares de validação |
| /src/database | Contém todos modelos da aplicação |

### Modelagem da base de dados PostgreSQL

Foi utilizado o app https://dbdiagram.io/ para modelagem previa da base postgres. 

Acesse a documentação do modelo: https://dbdocs.io/alexandre_mariano1/labmedicinebd

![App Screenshot](https://raw.githubusercontent.com/devmariano/project_files_repo/main/modelo_db.jpg)


## 🚀 Como executar o projeto

-Clonar o repositório https://github.com/devmariano/Projeto_Avaliativo_API_Modulo01.git

-Criar uma base de dados no PostgreSQL com nome **labmedicinebd**

-Criar um arquivo .env na raiz do projeto com os seguintes parametros:
```
DIALECT_DATABASE=''
HOST_DATABASE=''
USER_DATABASE=''
PASSWORD_DATABASE=''
PORT_DATABASE=''
PORT_API=''
NAME_DATABASE=''
```

-No prompt de comando executar :
```sh
npm install 
```
-Executar em seguida:
```sh
npm start
```

## 💻 Demonstração da API 

Aqui você pode testar os endpoints online: <https://labmedicine-api.onrender.com>

ℹ️ disponivel até 20/07/2023 

![App Screenshot](https://raw.githubusercontent.com/devmariano/project_files_repo/main/teste_rota.jpg)
## Documentação da API

### Endpoints - Rotas Pacientes
#### S01 - Cadastro de Paciente

```http
  POST /api/pacientes
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id`      | `int` | **Autoincremental**. Chave primaria |
| `nome_completo` | `string` | **Obrigatório**. Nome do paciente|
| `genero` | `string` | Genero do paciente|
| `data_nascimento` | `date` | **Obrigatório** Data de nascimento do paciente|
| `cpf` | `string` | **Obrigatório**. CPF do paciente, único e válido|
| `telefone` | `string` | Telefone do paciente|
| `contato_emergencia` | `string` | **Obrigatório**. Nome do contato de emergência|
| `lista_alergias` | `string` | Alergias do paciente|
| `lista_cuidados` | `string` | Cuidados especiais do paciente|
| `convenio` | `string` | Convênio do paciente|
| `status_atendimento` | `string` | Valores: 'AGUARDANDO_ATENDIMENTO','EM_ATENDIMENTO','ATENDIDO','NAO_ATENDIDO'|


Request JSON exemplo
```http
  {
    "nome_completo":"Paulo Nassi",
    "genero":"MASCULINO",
    "data_nascimento":"1984-03-01",
    "cpf":"47360294045",
	"telefone":"21 984569813",
    "contato_emergencia":"Marina Nassi",
	"lista_alergias":"Dipirona",
	"lista_cuidados":"nenhum",
	"convenio":"Amil",
	"status_atendimento":"AGUARDANDO_ATENDIMENTO"
}
```

| Response Status       | Descrição                           |
|  :--------- | :---------------------------------- |
|  `201` | sucesso|
|  `400` | dados inválidos|
|  `409` | CPF já cadastrado|
|  `500` | erro interno|

##

#### S02 - Atualização dos dados de Pacientes

```http
  PUT /api/pacientes/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome_completo` | `string` |  Nome do paciente|
| `genero` | `string` | Genero do paciente|
| `data_nascimento` | `date` |  Data de nascimento do paciente|
| `cpf` | `string` |  CPF do paciente, único e válido|
| `telefone` | `string` | Telefone do paciente|
| `contato_emergencia` | `string` | Nome do contato de emergência|
| `lista_alergias` | `string` | Alergias do paciente|
| `lista_cuidados` | `string` | Cuidados especiais do paciente|
| `convenio` | `string` | Convênio do paciente|


Request JSON exemplo
```http
/api/pacientes/1
```
```http
  {
	"telefone":"'1 9245698115",
	"convenio":"Unimed"
}
```

| Response Status       | Descrição                           |
|  :--------- | :---------------------------------- |
|  `200` | sucesso|
|  `400` | dados inválidos|
|  `404` | não encontrado registro com o código informado|
|  `500` | erro interno|

##
#### S03 - Atualização do status de atendimento

```http
  PUT /api/pacientes/:id/status
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório** número inteiro chave primaria|
| `status_atendimento` | `string` | Valores: 'AGUARDANDO_ATENDIMENTO','EM_ATENDIMENTO','ATENDIDO','NAO_ATENDIDO'|



Request JSON exemplo
```http
/api/pacientes/1/status
```
```http
  {
	"status_atendimento":"EM_ATENDIMENTO"
  }
```

| Response Status       | Descrição                           |
|  :--------- | :---------------------------------- |
|  `200` | sucesso|
|  `400` | dados inválidos|
|  `404` | não encontrado registro com o código informado|
|  `500` | erro interno|

##
#### S04 - Listagem de Pacientes

```http
  GET /api/pacientes
```
Não é necessario resquest body

Opcionalmente pode ser utilizado no patch um query param informando: AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO e NAO_ATENDIDO

Exemplo:
`/api/pacientes?status=ATENDIDO`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `status_atendimento` | `string` | Valores: 'AGUARDANDO_ATENDIMENTO','EM_ATENDIMENTO','ATENDIDO','NAO_ATENDIDO'|

Exemplo de resposta:

```http
{
	"id": 1,
	"nome_completo":"Paulo Nassi",
    "genero":"MASCULINO",
    "data_nascimento":"1984-03-01",
    "cpf":"47360294045",
	"telefone":"21 984569813",
    "contato_emergencia":"Marina Nassi",
	"lista_alergias":"Dipirona",
	"lista_cuidados":"nenhum",
	"convenio":"Amil",
	"status_atendimento": "ATENDIDO",
	"total_atendimentos": 1,
	"createdAt": "2023-04-19T10:32:32.796Z",
	"updatedAt": "2023-04-20T21:14:53.099Z"
}
```

| Response Status       | Descrição                           |
|  :--------- | :---------------------------------- |
|  `200` | sucesso|

##
#### S05 - Listagem de Paciente pelo identificador

```http
  GET /api/pacientes/:id
```
Não é necessario resquest body

Request exemplo:
`/api/pacientes/1`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório** número inteiro chave primaria|

Exemplo de resposta:

```http
{
	"id": 1,
	"nome_completo":"Paulo Nassi",
    "genero":"MASCULINO",
    "data_nascimento":"1984-03-01",
    "cpf":"47360294045",
	"telefone":"21 984569813",
    "contato_emergencia":"Marina Nassi",
	"lista_alergias":"Dipirona",
	"lista_cuidados":"nenhum",
	"convenio":"Amil",
	"status_atendimento": "ATENDIDO",
	"total_atendimentos": 1,
	"createdAt": "2023-04-19T10:32:32.796Z",
	"updatedAt": "2023-04-20T21:14:53.099Z"
}
```

| Response Status       | Descrição                           |
|  :--------- | :---------------------------------- |
|  `200` | sucesso|
|  `404` | não encontrado registro com o código informado|

##
#### S06 - Exclusão de Paciente

```http
  DELETE /api/pacientes/:id
```
Não é necessario resquest body

Request exemplo:
`/api/pacientes/1`
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `int` | **Obrigatório** número inteiro chave primaria|

Não há response no body em caso de sucesso


| Response Status       | Descrição                           |
|  :--------- | :---------------------------------- |
|  `204` | sucesso|
|  `404` | não encontrado registro com o código informado|


##

![Logo](https://raw.githubusercontent.com/devmariano/project_files_repo/main/labMedicine_logo6.jpg)


