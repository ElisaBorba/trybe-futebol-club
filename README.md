# ⚽ Trybe Futebol Club
Esta aplicação foi desenvolvida para gerenciar partidas de futebol entre times. Utiliza TypeScript, Express.js e Sequelize para proporcionar uma experiência de gerenciamento de partidas de forma eficiente e segura.

## 💻 Tecnologias Utilizadas
* Node.js
* Express.js
* TypeScript
* MySQL
* JWT Authentication
* Sequelize
* Docker

### Estrutura do Projeto
```
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── interfaces/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── tests/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── frontend/
│   └── ...
```
### JWT Authentication
Para acessar rotas protegidas, é necessário adicionar o token JWT no header da requisição:
`Bearer <JWT_TOKEN>`

* **Controllers**: Gerenciam as requisições HTTP, como LeaderboardController para classificação, MatchesController para partidas e TeamsController para times.
  
* **Middlewares**: validateLogin (valida o formato de login) e validateToken (validação do token).
  
* **Models**: Fornece métodos de interação com o database, como LeaderboardModel para classificação, MatchesModel para partidas, UserModel para o login e TeamModel para times.
  
* **Services**: Contêm a lógica de negócio e interagem com os models para operações no banco de dados.
  
* **Utils**: Possui as funções, teamStandingFormatter para formatar dados de classificação, sortLeaderboard para ordenar a classificação e mapStatusHTTP para mapear status HTTP para códigos numéricos.

### Como Executar
1️⃣ Instale as dependências:
```
npm install
```
2️⃣ Inicializando com docker:
```
npm run compose:up
```
🎲 Execute as migrations e popule o banco de dados:
```
npm run db:reset
```
### 🧪 Execução dos no diretório tests/
```
npm run test
```
