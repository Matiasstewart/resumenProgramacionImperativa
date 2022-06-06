// OPERADORES LOGICOS

// AND (&&)
// Todas las sentencias se tienen que cumplir para dar "true"

console.log(6<8 && 6<7) //True, 6 es menor que 8 Y que 7
console.log(6<10 && 6<6) //False, 6 es menor que 10 peno no que 6

// OR (||)
// Con que UNA sentencia sea verdadera alcanza para que de "true"

console.log(8>=15 || 8!=3)

// NEGACION (!)
// Alterna entre verdadero y falso cambiando el resultado original

console.log(!(8<7)) // Originalmente deberia dar "false" ya que 8 no es menor que 7, pero da "true" por el operador de negación

// CONCATENACION (+)
// Para unir cadenas de texto 

let nombre = "Lionel"
let apellido = "Messi"

console.log("Hola, como estas " + nombre + " " + apellido + " ?")

// Si lo usamos para unir datos distintos como un string y un number el resultado es un string, convierte al number.

let edad = 22
let años = " Años"

console.log("Tengo " + edad + años)

// COMPARACION DE STRINGS
// Se usa (==) para comparar valor y (<,>) compara por orden alfabetico

console.log("hola" == "hola") //True, son exactamente iguales
console.log("Hola" == "hola") //False, el primer "hola" tiene la "H" en mayuscula
console.log("a" < "bbb") //True, la "a" está antes en el alfabeto que la "b"
console.log("arpa" < "casa") //True, "arpa" está antes en el alfabeto que "casa"
console.log("agua" > "vaso") //false, "agua" no esta despues que "vaso" en el alfabeto

// Al usar (&&) si ambos son string, devuelve el ultimo valor

console.log("Gato" && "Perro") //Devuelve "Perro"
console.log(6 && "Casa") //Devuelve "Casa"

// Al usar (||) devuelve la primer sentencia true encontrada

console.log("Gato" || "Perro") // Devuelve "Gato"
console.log("Gato" || 8) // Devuelve "Gato"
console.log(8 || "Perro") // Devuelve 8