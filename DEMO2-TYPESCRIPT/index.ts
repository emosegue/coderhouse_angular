const nombre: string = "Miguelo";
const edad: number = 30;

class Personaje implements Spiderman{
    nombre: string;
    poderes: Array<string>;
    edad: number;

    constructor(nombre: string, edad:number, poderes:Array<string>) {
        this.nombre = nombre;
        this.edad = edad;
        this.poderes = poderes;
    }
}

interface Spiderman{
    nombre: string;
    poderes : Array<string>;
}

const personaje: Personaje = new Personaje("Jeremias", 18, ["trepar", "fuerza", "agilidad"])

console.log(personaje);