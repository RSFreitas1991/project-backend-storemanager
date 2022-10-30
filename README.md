# Store Manager

# Contexto
O objetivo deste projeto é a criação de um CRUDE em uma API REST que simula a gestão de uma loja fictícia.
>O projeto possui testes unitários utilizando Chai, Sinon, Mocha e Jest.

## Rotas disponíveis

> http://localhost:3000/products  
> http://localhost:3000/sales

## Técnologias usadas

> Desenvolvido usando: Express.JS, mySQL, ES6, Chai, Sinon, Mocha e Jest.

## Instalando Dependências

```bash
cd src/
npm install
``` 
## Executando aplicação

> Deve ser configurado um arquivo .env com as seguintes variáveis de ambiente:  
MYSQL_HOST,  
MYSQL_USER,  
MYSQL_PASSWORD,  
MYSQL_DATABASE,

  ```
    cd src/ && npm migration && npm seed && npm start
  ```

## Executando os testes unitários

  ```
    cd src/ && npm test:mocha
  ```
