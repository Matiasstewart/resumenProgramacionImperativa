// BUBBLE SORT
// Algoritmo utilizado para ordernar items de un array
// No es el más eficiente, ya que puede que haga ciclos innecesarios en algunos casos

let numeros = [1, 2, 5, 8, 4, 6, 7, 1, 5, 4]

const ordenAscendente = arr => {
    let aux
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {  //Se coloca el "-1" ya que este for siempre ira uno por delante, y no queremos que llegue a comparar un elemento que no esta definido en el ultimo ciclo.

            if (arr[j] > arr[j + 1]) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

//El funcionamiento consiste en comparar cada item del array con el siguiente, en el caso de que se sea mayor, intercambia posiciones.
//En el caso de que sea menor, cambia al item siguiente, y pregunta en base a ese hasta terminar, llevando siempre el mayor hacia el final en cada ciclo.
//No necesita un "retunr" porque lo que hace es cambiar el contenido del array, este se modifica a su nuevo estado.

ordenAscendente(numeros)

console.log(numeros)

console.log("----------------------")

let numerosCopia = [1, 2, 5, 8, 4, 6, 7, 1, 5, 4]

const ordenDescendente = arr => {
    let aux
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[j] < arr[j + 1]) {
                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
}

//Funciona igual que el anterior pero en este caso lleva en item menor hacia el final.
//Tampoco necesita del "return".

ordenDescendente(numerosCopia)
console.log(numerosCopia)