// setTimeout( () => console.log("d"), 2000)
// for (var i=0; i < 1000000000 ; i++) {

// }, 

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true};
const fnc = function (person) {
    console.log(`Hola yo soy, ${person.name}`)
   }

$.get(lukeUrl, opts, fnc )

