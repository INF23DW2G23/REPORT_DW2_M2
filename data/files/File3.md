# File 3 : Desenvolvimento

O projeto foi concebido como uma expansão da API Web REST desenvolvida no M1, agora integrada com uma aplicação cliente em ReactJS para gestão de recursos. 
A API, inicialmente implementada com Node.js e MySQL, continua a oferecer operações CRUD para gestão de dados. 
A aplicação cliente ReactJS permite aos utilizadores consultar e interagir com os recursos através de uma interface intuitiva.

Interação com o Banco de Dados usando Sequelize (ORM)

O Sequelize continua a ser utilizado para facilitar a interação com a base de dados MySQL. Modelos foram definidos para os recursos existentes e novos, mantendo a consistência e eficiência na manipulação dos dados.

Desenvolvimento da Aplicação Cliente com ReactJS

Utilizando ReactJS, uma biblioteca popular para interfaces de utilizadores dinâmicas, desenvolvemos uma aplicação cliente que consome a API REST. 
Componentes reutilizáveis foram criados para renderizar dados e permitir interações fluidas com os recursos disponibilizados pela API.

Implementação de Autenticação e Autorização com JWT

A camada de autenticação e autorização foi aprimorada com JSON Web Tokens (JWT), garantindo que apenas utilizadores autorizados tenham acesso aos recursos protegidos pela API. 
Este método seguro e escalável é essencial para controlar o acesso e proteger informações sensíveis.

Documentação da API com OpenAPI 3.0

Todos os endpoints da API foram documentados utilizando o formato OpenAPI 3.0. Isso proporciona uma documentação clara e estruturada, facilitando o entendimento e uso da API por terceiros e pelos próprios desenvolvedores.

Configuração do Ambiente com Docker

Para garantir consistência e facilidade de execução, a aplicação foi dockerizada utilizando Docker Compose. Ficando assim com 3 containers, um para a Base de dados, uma para o frontend e outro para o backend.
Essa abordagem simplifica o processo de implementação e permite escalabilidade conforme necessário.

Conclusão

O projeto foi realizado com sucesso, demonstrando um avanço significativo na integração entre a API REST e a aplicação cliente em ReactJS. 
Todos os requisitos foram atendidos, incluindo a implementação de uma camada robusta de autenticação, documentação clara da API e configuração eficiente do ambiente de desenvolvimento usando Docker.
---

[< Previous](File2.md) | [^ Main](../../../) |
