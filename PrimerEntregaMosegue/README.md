# Primer Entrega - Trabajo Final

## Consigna

Creación de un proyecto frontend basado en Angular para gestionar los asistentes a una serie de cursos
Deberá contener el perfil de administrador, el cual podrá listar, realizar altas y bajas de los alumnos, cursos e inscripciones y modificar sus datos. También podrá crear y modificar usuarios
El perfil usuario podrá listar los alumnos y los cursos, pero sí podrá agregar o eliminar inscripciones de alumnos a los cursos. No podrá realizar ninguna operación sobre los usuarios

## Rubricas Esperadas

- Creación de un proyecto Angular CLI con Angular.✅
- Creación de componentes de layout que incluya un navbar para el menú lateral y un toolbar para el título de la aplicación✅
- Creación de componentes: Lista de Alumnos y ABM de Alumnos✅
- Definir formularios Reactivos de ABM de alumnos✅
- Definir la lógica y estructura de representación de datos en listado, utilizando tablas de Angular Material tomando sus datos de arrays y funciones typescript✅

### Aspectos Positivos sobre las rubricas

- Uso de Dialogs
- Manejo de Dialogs dependiendo de la accion, el dialog de renderiza para un delete, add o update.
- Manejo de students a partir de un servicio
- Encapsulamiento de operaciones dentro del service, incluso la obtencion de un nuevo Id
- Toolbar con dinamismo para generarse a partir de archivo toolbar-items.ts

### Aspectos a Mejorar:

- Al abrir el dialog, el overflow aparece nuevamente. No pude resolverlo
- Si bien el genero funciona, ya que puedo verlo en el arreglo, no supe como setearlo en el formulario en caso de edit.
- No pude modificar la fecha del datepicker, por lo tanto deje la de la tabla en formato MM/dd/AAAA con un pipe

### Observaciones

Si bien no fue facil implementar las funcionalidades solicitadas, intente hacer uso de todo lo visto hasta el momento y agregarle componentes que considero útiles en un entorno de trabajo real, como Dialogs.

Me seria de gran utilidad tener una devolucion adicional sobre:

1. Entender si la estrategia que utilice para renderizar el dialog dinámicamente es correcta. Es decir, haciendo uso de los parámetros en dialogRef.
2. La forma en la que relleno el formulario desde el controlador. Esta funcionalidad tuve que investigarla por mi cuenta, y si bien cumple con la consigna, tal vez existe una forma mas sencilla de realizarlo que cargar item por item
3. Como alterar la fecha del datepicker. Intenté agregando el provider detallado abajo, pero no pude.

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
