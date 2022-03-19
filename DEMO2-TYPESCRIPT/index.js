var nombre = "Miguelo";
var edad = 30;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, edad, poderes) {
        this.nombre = nombre;
        this.edad = edad;
        this.poderes = poderes;
    }
    return Personaje;
}());
var personaje = new Personaje("Jeremias", 18, ["trepar", "fuerza", "agilidad"]);
console.log(personaje);
