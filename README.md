
# Project Car Shop

Um projeto onde foi aplicado os princípios de Programação Orientada a Objetos (`POO`) para a construção de uma API com `CRUD`para gerenciar uma concessionária de veículos.




## Stack utilizada

 - Docker
 - Typescript
 - Mongodb
 - Mongoose
 


## Rodando com o Docker

Clone o projeto

```bash
  git clone git@github.com:DavidJRRJ/project-car-shop.git
```

Entre no diretório do projeto

```bash
  cd project-car-shop
```

Suba os containers `car_shop` e `car_shop_db` com o comando

```bash
  docker-compose up -d
```

Acesse o terminal do container `car_shop` com o comando

```bash
  docker exec -it car_shop bash
```

Instale as dependências

```bash
   npm install
```

Rode a aplicação

```bash
   npm start
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando no terminal do container `car_shop`

```bash
  npm test
```


## Documentação da API

### Cadastra um carro

```http
  POST /cars
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**|
| `year` | `number` | **Obrigatório**|
| `color` | `string` | **Obrigatório**|
| `status` | `bool` | **Obrigatório**|
| `buyValue` | `number` | **Obrigatório**|
| `doorQty` | `number` | **Obrigatório**|
| `seatsQty` | `number` | **Obrigatório**|

- O endpoint deve receber a seguinte estrutura:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

### Lista todos os carros

```http
  GET /cars
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| Nenhum      |  | |

- Deve-se retornar um JSON com as seguintes chaves:
```json
    {
    "id": "6348513f34c397abcad040b2",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5
    }
```

### Lista um carro específico com base no `id`

```http
  GET /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

- Deve-se retornar um JSON com as seguintes chaves: 
```json
{
    "id": "634852326b35b59438fbea2f",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.99,
    "doorsQty": 4,
    "seatsQty": 5
}
```
- Será validado que não é possível listar um carro que não existe, deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Car not found" }
```

  - Será validado que não é possível listar um carro quando o formato do `id` esta inválido, deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```

### Atualiza um carro com base no seu `id`

```http
  PUT /cars/{id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**|
| `year` | `number` | **Obrigatório**|
| `color` | `string` | **Obrigatório**|
| `status` | `bool` | **Obrigatório**|
| `buyValue` | `number` | **Obrigatório**|
| `doorQty` | `number` | **Obrigatório**|
| `seatsQty` | `number` | **Obrigatório**|

- O endpoint deve receber a seguinte estrutura:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

- Deve-se retornar um JSON com as seguintes chaves: 
```json
    {
    "id": "634852326b35b59438fbea2f",
    "model": "Marea",
    "year": 1992,
    "color": "Red",
    "status": true,
    "buyValue": 12.000,
    "doorsQty": 2,
    "seatsQty": 5
    }
```

- Será validado que não é possível alterar um carro que não existe, deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Car not found" }
```

- Será validado que não é possível alterar um carro quando o formato do `id` esta inválido, deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```

### Cadastra uma moto

```http
  POST /motorcycles
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**|
| `year` | `number` | **Obrigatório**|
| `color` | `string` | **Obrigatório**|
| `status` | `bool` | **Obrigatório**|
| `buyValue` | `number` | **Obrigatório**|
| `category` | `string` | **Obrigatório**. _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_|
| `engineCapacity` | `number` | **Obrigatório**|

- O corpo da requisição deverá seguir o formato abaixo:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

### Lista todos as motos

```http
  GET /motorcycles
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| Nenhum      |  | |

- Deve-se retornar um JSON com as seguintes chaves: 
```json
[
    {
    "id": "634852326b35b59438fbea2f",
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
    },
    {
    "id": "634852326b35b59438fbea31",
    "model": "Honda Cbr 1000rr",
    "year": 2011,
    "color": "Orange",
    "status": true,
    "buyValue": 59.900,
    "category": "Street",
    "engineCapacity": 1000
    }
]
```

### Lista uma moto específica com base no `id`

```http
  GET /motorcycles/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

- Deve-se retornar um JSON com as seguintes chaves: 
```json
{
    "id": "634852326b35b59438fbea31",
    "model": "Honda Cbr 1000rr",
    "year": 2011,
    "color": "Orange",
    "status": true,
    "buyValue": 59.900,
    "category": "Street",
    "engineCapacity": 1000
}
```
- Será validado que não é possível listar uma moto que não existe, deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Motorcycle not found" }
```

- Será validado que não é possível listar uma moto quando o formato do `id` esta inválido, deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```

### Atualiza uma moto com base no seu `id`

```http
  PUT /motorcycles/{id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `model` | `string` | **Obrigatório**|
| `year` | `number` | **Obrigatório**|
| `color` | `string` | **Obrigatório**|
| `status` | `bool` | **Obrigatório**|
| `buyValue` | `number` | **Obrigatório**|
| `category` | `string` | **Obrigatório**. _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_|
| `engineCapacity` | `number` | **Obrigatório**|

- O endpoint deve receber a seguinte estrutura:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```
- Deve-se retornar um JSON com as seguintes chaves: 
```json
    {
    "id": "634852326b35b59438fbea2f",
    "model": "Honda Cb 600f Hornet",
    "year": 2014,
    "color": "Red",
    "status": true,
    "buyValue": 45.000,
    "category": "Street",
    "engineCapacity": 600
    }
```
- Será validado que não é possível alterar uma moto que não existe, deve-se retornar o `status 404` e um JSON com a seguinte mensagem: 
```json
{ "message": "Motorcycle not found" }
```

- Será validado que não é possível alterar uma moto quando o formato do `id` esta inválido, deve-se retornar o `status 422` e um JSON com a seguinte mensagem: 
```json
{ "message": "Invalid mongo id" }
```

### Deleta um carro com base no seu `id`

```http
  DELETE /cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

- Ao excluir com sucesso, retorna `status 204` sem body;

- Não é possível excluir um carro que não existe, é retornado um `status 404` e um JSON com a mensagem: 
```json
{ "message": "Car not found" }
```

- Não é possível excluir um carro quando o formato do `id` esta inválido, é retornado `status 422` e um JSON com a mensagem: 
```json
{ "message": "Invalid mongo id" }
```

### Deleta uma moto com base no seu `id`

```http
  DELETE /motorcycles/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

- Ao excluir com sucesso, retorna `status 204` sem body;

- Não é possível excluir uma moto que não existe, é retornado um `status 404` e um JSON com a mensagem: 
```json
{ "message": "Motorcycle not found" }
```

- Não é possível excluir uma moto quando o formato do `id` esta inválido, é retornado `status 422` e um JSON com a mensagem: 
```json
{ "message": "Invalid mongo id" }
```


