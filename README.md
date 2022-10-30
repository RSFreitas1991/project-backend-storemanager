# Store Manager

# Contexto
O objetivo deste projeto é a criação de um CRUDE em uma API REST que simula a gestão de uma loja fictícia.
>O projeto possui testes unitários utilizando Chai, Sinon, Mocha e Jest.

## Rotas disponíveis

> GET: http://localhost:3000/products  
> GET: http://localhost:3000/products/:id  
> PUT: http://localhost:3000/products/:id 
> DELETE: http://localhost:3000/products/:id 
> POST: http://localhost:3000/products/  
> GET: http://localhost:3000/sales/:id 
> GET: http://localhost:3000/sales/   
> POST: http://localhost:3000/sales/:id  

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
