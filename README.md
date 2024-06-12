<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Para poder correr el programa en local es importante seguir los siguientes pasos:
  * Es importante al momento de clonar el repositorio cambiarse a la rama develop para poder correr el programa
  * Correr el comando de npm install para poder instalar las dependecias
  * Correr el comando npm run start:dev para levantar el backend
  * Para poder hacer llamada a la api, utilizar postman o insomnia
  * La ruta a la que se deben hacer peticiones debe ser: http://localhost:3000/meta-photos/photos
    para poder ver la información de una solo foto http://localhost:3000/meta-photos/photos/1 
  * Para poder probar el filtrado y paginacion, por ejemplo los escenarios dados en el documento de descripción del test: 
      - http://localhost:3000/meta-photos/photos?title=repudiandae iusto
      - http://localhost:3000/meta-photos/photos?album.title=quidem
      - http://localhost:3000/meta-photos/photos?album.user.email=Sincere@april.biz
      - http://localhost:3000/meta-photos/photos?album.title=quidem&limit=10&offset=50

También está desplago el proyecto en esta ruta: https://meta-photo-api.onrender.com/meta-photos/photos
Entonces si gustan también pueden hacer las mismas pruebas desde postman o insomnia 

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
