/* eslint-disable no-undef */
module.exports = {
  "development": {
    "username": "root",
    "password": "senha_da_nasa",
    "database": "api-ademicon_development",
    "host": "127.0.0.1",
		"dialect": "mysql",
		"port": 3306,
    "operatorAliases": false,
    "define": {
      "timestamps": false,
      "underscored": true,
      "underscoredAll": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "api-ademicon_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "api-ademicon_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
