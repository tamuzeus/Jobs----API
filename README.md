# Menu-API

API Jobs, teste para Desenvolvedor FullStack.
API tem como função realização do GET da lista completa de vagas disponíveis!

## Sobre:

`Rotas abertas:`

1. GET / --- Realizar GET de toda lista de vagas disponíveis!    

`Principais tecnologias/bibliotecas/frameworks:`

1. Typescript - Para tipagem estática, interfaces e classes. Em outras palavras, para maior segurança e previsibilidade.
2. Node - Um ótimo ambiente de tempo de execução para criar aplicativos do lado do servidor escaláveis e eficientes com JS.
3. PostgreSQL - Um sistema de gerenciamento de banco de dados relacional, oferece segurança para armazenamento e manipulação de dados.
4. Jest - Bom frameworks de testes. Fácil de usar, oferece recursos avançados de testes como mocks, spy e snapshot testing.
5. Prisma ORM - Interação com bancos de dados SQL simples e segura, oferecendo um conjunto de APIs poderosas para consultas e migrações de dados.

## Como carregar o dump de desenvolvimento (opcional):

1. No diretório aonde está o dump (), abra o terminal.
2. Digite o seguinte comando:
   
```bash
-----
```

## Como executar em desenvolvimento:

1. Clone este repositório.
2. Instale todas as dependências.

```bash
npm i
```

3. Configure o arquivo `.env` usando o `.env.example`.

4. Se houver nescessidade de criação da `dist`, utilize: `npx tsc`

5. Inicie o servidor `---`, por exemplo: `----`

6. Execute o back-end em um ambiente de desenvolvimento:

```bash
npm run watch, npm run redist ou npm run dev (caso tenha a pasta dist)
```

## Como carregar o dump de teste (opcional):

1. No diretório aonde está o dump (), abra o terminal.
2. Digite o seguinte comando:
   
```bash
-----
```

## Como executar testes:

1. Configure o arquivo `.env.test` usando o `.env.example`.

2. Execute os testes em um ambiente de desenvolvimento:

```bash
npm run test
```

## Informações do banco:

1. Database name utilizada foi `#`, está pode ser definida e alterada no `.env`
2. É 1 tabela

`tabela:`



## Formato dos envios/retornos:


`GET /product`

1. Retorno

```
  {
    "_id": "642fc0da7e293a2cce660615",
    "categories": [
      [
        {
          "_id": "comidas",
          "parent": null,
          "name": "Comidas"
        }
      ]
    ],
    "name": "Vinho Seco",
    "qty": 30,
    "price": 20.4,
    "__v": 0
  },
  {
    "_id": "64307f885b2e3e38560351da",
    "categories": [
      [
        {
          "_id": "comidas",
          "parent": null,
          "name": "Comidas"
        }
      ]
    ],
    "name": "Vinho Tinto",
    "qty": 40,
    "price": 40.4,
    "__v": 0
  },
  {
    "_id": "64308040d0ce999029ae3774",
    "categories": [
      [
        {
          "_id": "comidas",
          "parent": null,
          "name": "Comidas"
        }
      ]
    ],
    "name": "Pizza",
    "qty": 16,
    "price": 10,
    "__v": 0
  }
```

