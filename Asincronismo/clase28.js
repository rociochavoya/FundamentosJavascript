// setTimeout( () => console.log("d"), 2000)
// for (var i=0; i < 1000000000 ; i++) {

// }, 

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true};
const fnc = function (person) {
    console.log(`Hola yo soy, ${person.name}`)
   }

function obtenerPersonaje (id) {
    const url =  `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, fnc )
}
for (let i=0; i<=100; i++){
  console.log(obtenerPersonaje(i))  
}



