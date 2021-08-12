# Database

Para poder levantar la base de datos en el sistema se utiliza docker. Archivo de configuracion ''docker-compose.yml''.

## Levantar base de datos
```bash
sudo docker-compose up
```
## Apagar base de datos
```bash
sudo docker-compose down
```

# Back End

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentation

Para poder ver la documentación del sistema, una ves levantado el servidor se debe ingrensar a <a href="localhost:3000/api">localhost:3000/api</a>