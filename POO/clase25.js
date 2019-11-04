// Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis 
// sobre la herencia basada en prototipos de JavaScript.
// La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear 
// una clase que es hija de otra clase. El método constructor es un método especial para crear e 
// inicializar un objeto creado a partir de una clase.

class Person {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log( `Hola, me llamo ${this.nombre}${this.apellido}`)
    } 
    soyAlto() {
        if(this.altura >= 1.80) {
            console.log(`soy alto, mido ${this.altura}`)
          }else{
            console.log(`soy un hobit, mido ${this.altura}`)
          }
    }
}

class Desarrollador extends Person {
    constructor(nombre, apellido, altura) {
       super(nombre,apellido,altura)
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    } 
}