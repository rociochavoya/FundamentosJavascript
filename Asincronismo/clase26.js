// En JavaScript, los parámetros de funciones son por defecto undefined. 
// De todos modos, en algunas situaciones puede ser útil colocar un valor 
// por defecto diferente que lo evalúe como verdadero.
// Algunos valores que son evaluados dentro de una condicion dan True, 
// un objeto, un Array, un String. Otros valores dan False, como null, el 0, 
// un string vacio. 

class Person {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        var { nombre, apellido} = this
        console.log( `Hola, me llamo ${nombre}${apellido}`)
    if (fn) {
           fn(nombre, apellido, false)
      }
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

    saludar(fn) {
        var { nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)
       }  
    } 
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabia que eras desarrolador/a`)
    }
}

      let rocio =  new Person("Rocio", "Chavoya", 1.50);
      let naidy =  new Person("Naedelin", "Moreno", 1.20);     
      let luis =  new Desarrollador("Luis", "Gonzalez", 1.90);

      rocio.saludar()
      naidy.saludar(responderSaludo)
      luis.saludar(responderSaludo)