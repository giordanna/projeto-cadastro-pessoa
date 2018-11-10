# Projeto Cadastro Pessoa

Este projeto foi criado com o [Angular CLI](https://github.com/angular/angular-cli) versão 7.0.4.

## Escopo

Criar um projeto Angular 6, utilizando a abordagem SPA com as seguintes funcionalidades:

- Construir a estrutura do projeto utilizando o npm (gerenciador de pacotes do Node.js);
- Criar uma pagina de cadastro de Pessoa com os seguintes campos: ID, Nome, Email, Idade, Login, Senha e Status (ativo/inativo);
- Criar uma listagem dos usuários cadastrados, através de uma GRID;
- Criar a rota linkando uma página a outra (Adicionar Pessoa e Listar Pessoa);
- Implementar o consumo da API disponibilizadas, através dos dois endpoints:
	- API de Listagem
	- API de Cadastro
- Criar um design básico para páginas (pode ser utilizado o bibliotecas/frameworks como bootstrap ou material-UI design disponíveis no repositório do npm)

## Tecnologias
- Angular CLI 7.0.4
- Bootstrap 3.3.7
- Node.js 10.13

## Como executar

Execute `ng serve` para executar a versão de desenvolvimento. Depois acesse `http://localhost:4200/`.

Para executar o servidor de endpoints de API, em um outro terminal na mesma pasta execute `json-server --watch db.json`. A API poderá ser acessada via `http://localhost:3000/`.
## Como compilar/construir

Execute `ng build` para buildar o projeto. Os arquivos serão armazenados do diretório `dist/`. Use a flag `--prod` para versão de produção.

## TODOs
- Paginação da lista de pessoas.

## Dúvidas
Caso há alguma dúvida em relação a este repositório, envie para gior.grs@gmail.com.
