// Los objetos en JavaScript son “contenedores” dinámicos de propiedades. 
// Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, 
// la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto,
// en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el 
// nombre o se alcance el final de la cadena de prototipos.

function heredaDe (prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
    }
    
function Person(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    
Person.prototype.saludar = function(){
        console.log( `Hola, me llamo ${this.nombre}${this.apellido}`)
      };
    
      Person.prototype.soyAlto = function(){
        if(this.altura >= 1.80) {
          console.log(`soy alto, mido ${this.altura}`)
        }else{
          console.log(`soy un hobit, mido ${this.altura}`)
        }
      };
    
      function Desarrollador(nombre, apellido){
          this.nombre = nombre
          this.apellido = apellido
      }
      
      heredaDe (Desarrollador, Person)
    
      Desarrollador.prototype.saludar = function () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
      }
    
      
    
    //   let rocio =  new Person("Rocio", "Chavoya", 1.50);
    //   rocio.saludar();
    //   rocio.soyAlto();
      
    //   let naidy =  new Person("Naedelin", "Moreno", 1.20);
    //   naidy.saludar();
    //   naidy.soyAlto();
      
    //   let luis =  new Person("Luis", "Gonzalez", 1.90);
    //   luis.saludar();
    //   luis.soyAlto();