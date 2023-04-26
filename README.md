# Jobs-API

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

1. No diretório aonde está o `dump`, abra o terminal.
2. Digite o seguinte comando:
   
```bash
pg_restore -U seu_username -d Job C:\local_até_o_dump\dump.sql
```

## Executar o prisma:

1. Rode comando de inicizalição do Prisma ORM.

```bash
npx prisma init
```

2. Ler as tabelas do seu banco (definidas em sua .env) e trazer ao Prisma.

```bash
npx prisma db pull
```

3. Gerar um conjunto de classes e funções TypeScript que representam os modelos do banco de dados definidos em um arquivo schema.prisma.

```bash
npx prisma generate
```

## Como executar em desenvolvimento:

1. Clone este repositório.
2. Instale todas as dependências.

```bash
npm i
```

3. Configure o arquivo `.env` usando o `.env.example`.

4. Execute o back-end em um ambiente de desenvolvimento:

```bash
npm run start
```


## Informações do banco:

1. Database name utilizada foi `Job`, está pode ser definida e alterada no `.env`
2. Possui 1 tabela.

`tabela:`

- jobs

## Formato dos envios/retornos:


`GET /`

1. Retorno

```
  [{
    "id": 1,
    "title": "Desenvolvedor Web",
    "description": "Desenvolvimento de aplicações web utilizando React e Node.js",
    "companyName": "Empresa A",
    "cityName": "São Paulo",
    "stateName": "São Paulo - SP",
    "updatedAt": "2023-04-25T08:42:45.033Z",
    "createdAt": "2023-04-25T08:42:45.033Z"
  },
  {
    "id": 2,
    "title": "Analista de Sistemas",
    "description": "Análise e desenvolvimento de sistemas para a área financeira",
    "companyName": "Empresa B",
    "cityName": "Rio de Janeiro",
    "stateName": "Rio de Janeiro - RJ",
    "updatedAt": "2023-04-25T08:42:45.033Z",
    "createdAt": "2023-04-25T08:42:45.033Z"
  }]
```

