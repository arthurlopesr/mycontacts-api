<h1 align="center">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/DWLsHRv/logo.png" alt="logo" border="0"></a>
</h1>

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E6&labelColor=121214" alt="License">
</p>

<h1 align="center">
    API | MyContacts
</h1>


* MyContacts é uma aplicação simples de gerenciamento de contatos, onde os usuários podem armazenar informações de contato, como nome, número de telefone e endereço de email. Este repositório contém o código-fonte da aplicação.

### 🛠️ Nesse projeto foi utilizado
* Node.js
* Express
* Docker
* PostgreSQL

### 💻 Conceitos implantados - Back-end
- Responsabilidade Única (Separados por folders controllers, repositories e middlewares)
- [Conexão com o nosso Container no Docker (folder - database)](https://yarnpkg.com/package/pg)
- Criação da DATABASE, Tabelas, linhas e utilizando o uuid-ossp para geração do id
- Sistema de rotas utilizando o Express
- CRUD

## Configuração do ambiente
Requer [Node.js](https://nodejs.org/) v14+ para executar.

### Clonar a aplicação
```sh
git clone https://github.com/arthurlopesr/mycontacts.git
```
### Instalar as dependências
```sh
cd mycontacts
yarn | npm i
```

### Rodar
```sh
yarn start | npm start
```

### Docker 
* Baixando a imagem - postgres: docker pull postgres
* Criando o container: docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres (Já inicia automaticamente)
* Caso não tenha iniciado o container, faça o seguinte comando: docker start pg
* Verificar se o container está rodando: docker ps


&nbsp;

<div align="center">
 <a href="https://app.rocketseat.com.br/me/arthur-lopes">
   <img align="center" style="border-radius: 100%;" src="https://github.com/arthurlopesr.png" width="100px" alt=""/>
  </a>
</div>
<br/>
<p align="center">Desenvolvido por Arthur Lopes 🚀 </p> 
<p align="center">Entre em contato!</p>
<div align="center">
<a href="https://www.linkedin.com/in/arthur-lopesr/" target="_blank">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;
 <a href="https://www.instagram.com/arthur_lopesr/" target="_blank">
    <img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" />        
  </a>&nbsp;&nbsp;
 <a href="mailto:arthurlopr12@gmail.com">
    <img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" />        
  </a>&nbsp;&nbsp; 
</div>
