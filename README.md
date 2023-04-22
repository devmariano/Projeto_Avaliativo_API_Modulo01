
![App Screenshot](https://raw.githubusercontent.com/devmariano/project_files_repo/main/labMedicine_logo2.jpg)
# API LABMedicine 

O Projeto LABMedicine consiste em uma API para gestão hospitalar que permite o cadastro e gestão de médicos, enfermeiros e pacientes além do cadastro e **listagem** de atentimentos.


## Tecnologias utilizadas

Projeto foi desenvolvido utilizando a linguagem javascript com Node.js framework e banco de dados PostgreSQL. 

Seguem abaixo as depêndencias externas utilizadas:

| Plugin | Uso |
| ------ | ------ |
| Express | Gerenciar requisições de diferentes verbos HTTP em diferentes URLs |
| Sequelize | Gerenciar modelos da aplicação |
| Pg, Pg-hstore | Cliente PostgreSQL, Serializa e desserializa dados JSON |
| YUP | Validação dos dados |
| Dotenv | Carrega variáveis de ambiente de um arquivo .env |

## Técnicas e padrões utilizadas

O projeto foi dividido em uma estruturas de pastas para organizar os models, controllers, middlewares e database

| Local | Uso |
| ------ | ------ |
| /src/models | Contém todos modelos da aplicação |
| /src/controllers | Contém todos modelos da aplicação |
| /src/middlewares | Contém os middlewares de  |
| /src/database | Contém todos modelos da aplicação |


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
## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.

### Endpoints Médicos

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.
##

![Logo](https://raw.githubusercontent.com/devmariano/project_files_repo/main/labMedicine_logo6.jpg)


