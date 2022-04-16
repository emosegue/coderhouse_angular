# Primer Entrega - Trabajo Final

## Consigna

Creación de un proyecto frontend basado en Angular para gestionar los asistentes a una serie de cursos
Deberá contener el perfil de administrador, el cual podrá listar, realizar altas y bajas de los alumnos, cursos e inscripciones y modificar sus datos. También podrá crear y modificar usuarios
El perfil usuario podrá listar los alumnos y los cursos, pero sí podrá agregar o eliminar inscripciones de alumnos a los cursos. No podrá realizar ninguna operación sobre los usuarios

## Rubricas Esperadas

- Proyecto Angular CLI con Angular. ✅
- Componentes de layout que incluya un navbar para el menú lateral y un toolbar para el título de la app. ✅
- Componentes: Lista de Alumnos y ABM de Alumnos. ✅
- Formularios Reactivos de ABM de alumnos. ✅
- Lógica y estructura de representación de datos en listado, utilizando tablas de Angular Material tomando sus datos de arrays y funciones typescript. ✅
- Pipe personalizado para mostrar el nombre junto al apellido de los alumnos. ✅
- Directiva personalizada para que las cabeceras o titulos tengan letra tamaño 20. ✅
- ~~Uso de la libreria de boostrap (instalada en el angular.json, no usar cdn)~~
  Durante la clase se aclaró que en caso de implementar la totalidad del proyecto con Material, no era necesario eto, por ende no fué instalado.
- Subir el código a repositorio de GitHub. ✅

### Aspectos Positivos sobre las rubricas

Si bien todas las rúbricas del ejercicio fueron realizadas, me gustaría destacar que llevé a cabo ciertos features adicionales.

- Uso de Dialogs
- Manejo de Dialogs dependiendo de la accion, el dialog de renderiza para un delete, add o update.
- Manejo de students a partir de un servicio
- Encapsulamiento de operaciones dentro del service, incluso la obtencion de un nuevo Id
- Toolbar con dinamismo para generarse a partir de archivo toolbar-items.ts
- Manejo de formularios reactivos a partir de observables.

### Aspectos a Mejorar:

- Al abrir el dialog, el overflow aparece nuevamente. No pude resolverlo
- Si bien el genero funciona, ya que puedo verlo en el arreglo, no supe como setearlo en el formulario en caso de edit.
- No pude modificar la fecha del datepicker, por lo tanto deje la de la tabla en formato MM/dd/AAAA con un pipe

### Observaciones

Si bien no fue facil implementar las funcionalidades solicitadas, intente hacer uso de todo lo visto hasta el momento y agregarle componentes que considero útiles en un entorno de trabajo real, como Dialogs.

Me seria de gran utilidad tener una devolucion adicional sobre:

1. Entender si la estrategia que utilice para renderizar el dialog dinámicamente es correcta. Es decir, haciendo uso de los parámetros en dialogRef.
2. La forma en la que relleno el formulario desde el controlador. Esta funcionalidad tuve que investigarla por mi cuenta, y si bien cumple con la consigna, tal vez existe una forma mas sencilla de realizarlo que cargar item por item
3. Como alterar el formato de fecha del datepicker. Intenté agregando el provider detallado abajo, pero no pude.

```js
{provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
```

4. Identificar el origen del overflow de la pagina, yo lo solucione agregando un estilo en styles.css

```css
html,
body,
#st-full-pg {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
```

## Patchnotes

### 20221404

- Se agrega el componente IziToast para mostrar cuando un usuario es agregado, modificado o eliminado.
- Se corrige error por el cual no se mostraban los errores al momento de realizar las validaciones de los campos Nombre, Apellido y Email.
- Se agrega el Lifecycle hook `ngOnDestroy()` a la clase Student para desuscribir el consumo de datos del servicio.

- Se agrega el método `getStudentsObservable()` dentro del servicio Student, el cual devuelve un Observable de User[] y se genera una suscripcion al mismo dentro de `student.component.ts` asignandole el valor de la suscripcion al arreglo UserOb
- Para verificar su funcionamiento, deberá cambiar la linea 17 dentro del archivo student.component.html

  ```html
  [dataSource]="usersOb"
  ```

- Se agrega el método `getStudentsObservableFiltered()` dentro del servicio Student, el cual devuelve un Observable de User[] cuyos permisos incluyan el 2 (alumnos).
  Para verificar su funcionamiento, deberá cambiar la linea 17 dentro del archivo student.component.html

  ```html
  [dataSource]="usersFiltered$"
  ```

- Se agrega el método `getStudentsPromise()` dentro del servicio Student, para devolver el arreglo de usuarios como Promise.
  Para verificar su funcionamiento, deberá cambiar la linea 17 dentro del archivo student.component.html

  ```html
  [dataSource]="users"
  ```

- Se modifica el boton guardar del Dialog con la propiedad disable, en aquellos casos en donde el formulario sea inválido
- Se modifica el lugar de creacion del FormGroup de Student al constructor, para evitar volver a generar los Validators al momento de edicion.
