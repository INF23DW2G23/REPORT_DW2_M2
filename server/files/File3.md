# File 3 : Desenvolvimento

O projeto foi concebido como um sistema de gestão de smartphones, desde a criação da API até à implementação de uma interface para utilizadores. A API foi desenvolvida utilizando Node.js e MySQL, enquanto a interface de utilizador foi construída com Express.js. O sistema permite criar, eliminar, editar e atualizar informações sobre smartphones e utilizadores, proporcionando uma gestão eficaz destes recursos.

## Interação com o Base de Dados usando Sequelize (ORM)

O Sequelize foi fundamental para a interação com a base de dados MySQL, simplificando a definição de modelos e a realização de operações CRUD (Create, Read, Update, Delete). 
Os modelos foram definidos para as tabelas Company, User, Phone e Accessories na base de dados SMART-MANAGEMENT, com o uso de chaves estrangeiras (foreign keys) para estabelecer relacionamentos entre os modelos.

## Desenvolvimento da API com Express.js

Nesta fase do projeto, foi implementada a API utilizando Express.js, uma framework robusta e adequada para desenvolvimento de APIs RESTful. Os modelos definidos anteriormente foram utilizados nos controladores para realizar operações CRUD nos recursos, proporcionando uma gestão eficaz dos dados.

## Implementação de Autenticação com JWT (JSON Web Tokens)

A autenticação de utilizadores foi implementada com JSON Web Tokens (JWT), fornecendo um método seguro e eficiente para geração, validação e verificação de tokens de acesso. 
Isso contribui para a proteção da API e controlo de acesso aos recursos.

## Postman

Uma coleção no Postman foi disponibilizada para facilitar os testes e consulta dos recursos da API. 
Isso permite uma interação simplificada com os endpoints da aplicação durante o desenvolvimento e testes.

## Conclusão

O projeto foi concluído com sucesso, atendendo a todos os requisitos propostos. Utilizamos a plataforma Docker para virtualizar e contentorizar a aplicação, o que possibilitou uma execução eficiente e escalável. Como resultado final, criamos duas imagens Docker para os serviços da aplicação: uma para a base de dados MySQL e outra para a aplicação Swagger.

---

[< Previous](File2.md) | [^ Main](../../../) |
