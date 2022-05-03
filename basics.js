/* **Iteración #1: Mix for e includes**

Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()** */
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
const categorias = [];
for (const movie of movies) {
  if (!categorias.includes(movie["categories"])) {
    categorias.push(movie.categories);
  }
}
/* **Iteración #2: Mix Fors**

Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios. */
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let sumVol = 0;
let lenghtvolume = 0;

for (const key in users) {
  if (typeof users[key].favoritesSounds === Object);
  for (const k in users[key].favoritesSounds) {
    if (users[key].favoritesSounds[k].volume) {
      sumVol += users[key].favoritesSounds[k].volume;
      lenghtvolume++;
    }
  }
}
let promVolume = sumVol / lenghtvolume;

console.log("El promedio de volumen es", promVolume);

/* **Iteración #3: Mix Fors**

Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript. */

let countWaves = 0;
let countRain = 0;
let countFirecamp = 0;
let countShower = 0;
let countTrain = 0;
for (const key in users) {
  if (typeof users[key].favoritesSounds === Object);
  for (const k in users[key].favoritesSounds) {
    if (k === "rain") {
      countRain++;
    } else if (k === "train") {
      countTrain++;
    } else if (k === "waves") {
      countWaves++;
    } else if (k === "firecamp") {
      countFirecamp++;
    } else if (k === "shower") {
      countShower++;
    }
  }
}
console.log("El conteo de rain es ==>", countRain);
console.log("El conteo de train es ==>", countTrain);
console.log("El conteo de waves es ==>", countWaves);
console.log("El conteo de firecamp es ==>", countFirecamp);
console.log("El conteo de shower es ==>", countShower);

/* **Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función: */
function findArrayIndex(array, text) {

  console.log("El index de", text, "es", array.indexOf(text));
}


let animalitos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

findArrayIndex(animalitos, 'Salamandra');
