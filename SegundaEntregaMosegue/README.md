# Segunda Entrega - Trabajo Final

## Consigna

Creación de un proyecto frontend basado en Angular para gestionar los asistentes a una serie de cursos
Deberá contener el perfil de administrador, el cual podrá listar, realizar altas y bajas de los alumnos, cursos e inscripciones y modificar sus datos. También podrá crear y modificar usuarios
El perfil usuario podrá listar los alumnos y los cursos, pero sí podrá agregar o eliminar inscripciones de alumnos a los cursos. No podrá realizar ninguna operación sobre los usuarios

## Rubricas Esperadas

- Proyecto Angular publicado en github ✅
- Menú lateral con las opciones a Alumnos, Cursos e Inscripciones ✅
- Feature module de Alumnos, con sus componentes y servicios
- Feature module de Cursos, con sus componentes y servicios
- Feature module de Inscripciones, con sus componentes y servicios
- Implementación de rutas para acceder a los feature modules
- Los feature modules deben tener la funcionalidad completa de ABM de cada opción y mostrar los datos utilizando el componente Table de Angular Material

## Separacion de Aspectos: Modules

### Shared Module

- Directives
- Pipes
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
- Student
  - student-list
  - student-dialog
- Inscription
  - inscription-list
  - inscription-dialog
- Auth
  - login
  - register

## Patchnotes

- Se agrega la libreria `moment.js` para poder generar el pipe DurationInWeeks (startDate,endDate) => number
- Se modifican las clases por interfaces y se posicionan dentro de core/model.
- Se agrega `material.module.ts` dentro del shared module
- Se modifica el CRUD de `users.service.ts` para que interactue con una API Rest y pueda aplicar persistencia de datos.
- Se soluciona el problema por el cual no se cargaba el seleccionable de genero
- Se reestructura el proyecto en base a Shared, Core y Featured Modules.
- Se agrega el pipe durationInWeeks haciendo uso de moment.js para mostrar la diferencia en semanas desde la fecha de inicio y fin del curso.
-
