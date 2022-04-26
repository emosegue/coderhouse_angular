# Segunda Entrega - Trabajo Final

## Consigna

Creación de un proyecto frontend basado en Angular para gestionar los asistentes a una serie de cursos
Deberá contener el perfil de administrador, el cual podrá listar, realizar altas y bajas de los alumnos, cursos e inscripciones y modificar sus datos. También podrá crear y modificar usuarios
El perfil usuario podrá listar los alumnos y los cursos, pero sí podrá agregar o eliminar inscripciones de alumnos a los cursos. No podrá realizar ninguna operación sobre los usuarios

## Rubricas AlcanzaDAS

- Proyecto Angular publicado en github ✅
- Menú lateral con las opciones a Alumnos, Cursos e Inscripciones ✅
- Toolbar superior muestra el nombre de la aplicacion ✅
- Feature module de Alumnos, con sus componentes y servicios ✅
- Feature module de Cursos, con sus componentes y servicios ✅
- Feature module de Inscripciones, con sus componentes y servicios ✅
- Implementación de rutas para acceder a los feature modules ✅
- Los feature modules deben tener la funcionalidad completa de ABM de cada opción y mostrar los datos utilizando el componente Table de Angular Material ✅
- Cada registro de la tabla tendrá una columna de acciones que el usuario podrá seleccionar sobre ese registro. Para todos serían la de modificar, eliminar, ver más detalle ✅
- La opción de ver detalle de un alumno se mostrará los datos del alumno más los cursos a los cuales está inscripto. Desde allí se podrá desinscribir de un curso a un alumno ✅
- La opción de ver detalle de un curso se mostrará los datos del curso más los alumnos a los cuales está inscripto. Desde allí se podrá des inscribir de un curso a un alumno ✅
- Todos los formularios son implementados en reactive forms y con Angular Material ✅
- Cada módulo se accede a través de una ruta ✅

## Separacion de Aspectos: Modules

### Shared Module

- Directives
  - font-size
- Pipes
  - concat
  - duration-in-weeks
- Material Module

### Core Module

- Services
- Models:
  - User
  - Inscription
  - Course

### Featured Modules

- Course
  - course-list
  - course-dialog
  - course-detail
- Student
  - student-list
  - student-dialog
  - student-detail
- Inscription
  - inscription-list
  - inscription-dialog
  - inscription-detail
- Auth
  - login
  - register

## Patchnotes

- Se agrega la libreria `moment.js` para poder generar el pipe DurationInWeeks (startDate,endDate) => number
- Se modifican las clases por interfaces y se posicionan dentro de core/model.
- Se agrega `MaterialModule` dentro del `SharedModule`
- Se agrega `ReactiveFormsModule` dentro del `SharedModule`
- Se modifica el CRUD de `users.service.ts` para que interactue con una API Rest y pueda aplicar persistencia de datos.
- Se soluciona el problema por el cual no se cargaba el seleccionable de genero
- Se reestructura el proyecto en base a Shared, Core y Featured Modules.
- Se agrega el pipe durationInWeeks haciendo uso de moment.js para mostrar la diferencia en semanas desde la fecha de inicio y fin del curso.
- Se agrega Lazy Loading a la carga de todos los Featured Modules
