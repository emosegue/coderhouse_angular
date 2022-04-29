# Consigna

Con lo visto en las últimas clases, optimiza tu proyecto incluyendo los aspectos obligatorios de este desafío entregable.

## Aspectos a incluir

- Crear un servicio de API ✅
- Consumir datos de mockAPI utilizando HttpClient desde los servicios ✅
- Agregar lazyloading y child routes de los features modules ✅
- Crear un componente de login ✅
- Sumar un guard que evite que los usuarios puedan ingresar a las rutas si no están autenticados. ✅

# Resolución

- Se genera el mock del servicio rest en Mockapi (https://mockapi.io/projects/625eb1fd873d6798e2ac43d4).
- Se vinculan todas las pantallas para manipulación de datos diréctamente al Mockapi: GET, POST, PUT, DELETE.
- Se agrega lazyloading y child routes a todos los features modules
- Se crea un componente de login y un componente de registro (actualmente sin uso.)
  - Credenciales para loguear como admin (**admin** - **admin**)
  - Credenciales para loguear como usuario (**user** - **user**)
- Se genera un guard para evitar que los usuarios puedan ingresar a las rutas si no están autenticados
