//Almacenamiento de datos más estructurado

let peliculas = ["Cars", "Termiantor", "Up"]  // Se ordenan con un indice que empieza en el 0 y tiene la longitud de la cantidad de elementos dentro del array

console.log(peliculas[1])  //Usamos los corchetes para llamar a un elemento determinado dentro del array.

let variados = [1, "Hola", 2, true, false, "Chau", peliculas] // Podemos almacenar diferentes tipos de datos dentro de un array hasta variables.

console.log(variados[6])

let numeros = [1,2,3,4,5,6,7,8]
let variadosDos = ["Hola", true, numeros, "Si"]

console.log(variadosDos[2][4])  // En este caso llamamos al numero 5 del array numeros que se encuentra dentro del array variadosDos.


// PROPIEDAD UTIL, LENGTH
// Sirve para determinar la longitud de un array

console.log(numeros.length) //Posee 8 elementos y su indice va del 0 al 7.