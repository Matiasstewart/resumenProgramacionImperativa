// PUSH
// Agrega elementos en el ultimo indice del array

let numeros = [1,2,3,4]

numeros.push(5)
numeros.push(6)

console.log(numeros) // retorna [1,2,3,4,5,6] Porque agregamos numeros al array

console.log("-----------------")

// POP
// Este metodo elimina el ultimo elemento del array, pero lo retorna, así que muchas veces es útil almacenarlo en una variable

let numerosDos = [1,2,3,4]

let sacarElemento = numerosDos.pop() // Es importante siempre ejecutar esta funcion con los parentesis

console.log(numerosDos) // retorna [1,2,3] ya que sacamos el ultimo elemento
console.log(sacarElemento) // retorna 4, que es el elemento quitado

console.log("-----------------")

// SHIFT
// Funciona con el "pop" pero con la diferencia que elimina el elemento del indice 0.

let numerosTres = [1,2,3,4]

let numeroShift = numerosTres.shift() //Es importante ejecutar el metodo

console.log(numerosTres) // Retorna [2,3,4] porque eliminamos el elemento en el indice 0
console.log(numeroShift) // Retorna el numero 1 porque es el elemento eliminado

console.log("-----------------")

// UNSHIFT
// Funciona como el Shift con la diferencia que en lugar de eliminar el elemento del indice 0, agrega un elemento en ese lugar.

let numerosCuatro = [1,2,3,4]

numerosCuatro.unshift(2)
numerosCuatro.unshift() // Si no le pasamos ningun parametro no hace nada

console.log(numerosCuatro) // Muestra el array con el numero 2 en el indice 0


console.log("-----------------")


// INDEX OF
// Busca en el array desde el indice 0 y si encuentra coincidencia retorna la posición del array donde se encuentra el elemento.

let letras = ["A","B","C","D","E","C"]

let posicionDeB = letras.indexOf("B")

let posicionDeZ = letras.indexOf("Z")

let posicionDeC = letras.indexOf("C")

console.log(posicionDeB) // Muestra el numero 1, ya que "B" se encuentra en el indice 1
console.log(posicionDeZ) // Muestra -1 ya que si no encuentra el elemento buscado retorna este numero
console.log(posicionDeC) // Muestra la primera aparicion de "C" ya que este elemento se encuentra 2 veces en el array


console.log("-----------------")


// LAST INDEX OF
// Busca en el array coincidencias pero de atras para adelante

posicionDeD = letras.lastIndexOf("D") // Retornara 3 ya que cuentra de derecha a izquierda


console.log(posicionDeD) 

console.log("-----------------")


// JOIN
// Une a todos los elementos de un array en un solo string


let numerosCinco = [1,2,3,4]
let letrasDos = ["A","B","C"]

let numerosCincoJuntos = numerosCinco.join()
let letrasDosJuntas = letrasDos.join(" - ") // Podemos pasarle por parametro que queremos que utilice para separar lo elementos de su interior, en este caso " - "

console.log(numerosCincoJuntos)
console.log(letrasDosJuntas)

console.log("-----------------")

// INCLUDES
// Similar al indexOf, busca en el array y retorna un booleano si encuentra o no el elemento

let simbolos = ["+", "-", "%", "*"]

let haySuma = simbolos.includes("+")
let hayDivision = simbolos.includes("/")


console.log(haySuma)
console.log(hayDivision)
