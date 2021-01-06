# Teste Full Stack - Ademicon
	
## Objetivo
 Api para a aplicação no teste Ademicon

Tela a ser desenvolvida:

## User Stories

### > Rota de login
	Resposta

	Status: 304 Found

```json
{
	"quota": "335",
	"group": "1",
	"password": "123456"
}
```
### > Rota de Registro
	Resposta
	
	Status: 201 Created

```json
{
	"quota": "335",
	"group": "1",
	"email": "test@test.com", 
	"password": "123456"
}
```

## Dependências do Projeto
```json
{
	"cors": "^2.8.5",
	"express": "^4.17.1",
	"mysql2": "^2.2.5",
	"sequelize": "^6.3.5",
	"sequelize-cli": "^6.2.0"
}
```

### Iniciar o projeto:
* Instale as dependências do projeto com o comando *yarn install* ou *npm install*.
* Inicie o projeto com comando *yarn start* ou *npm start* / *npm run start*.

### Requisitos:
* **[Node v14.10.0](https://nodejs.org/en/)** - ou superior, instalado em seu computador.
* **[Create React App](https://github.com/facebook/create-react-app)**