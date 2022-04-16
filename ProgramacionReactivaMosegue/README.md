## Consigna

Genera un proyecto que consuma un servicio y que el resultado del mismo sea mostrado utilizando el pipe async y que permita filtrar el resultado utilizando la programación reactiva.

## Aspectos a incluir en el entregable

- Utilizar una promise y un observable
- Obligatorio hacer los OnDestroy de los observables utilizados
- Servirse de al menos un filtro de los vistos durante la clase

## Modificaciones sobre la Primer Entrega para cumplir los aspectos esperados

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
