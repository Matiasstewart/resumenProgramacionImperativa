// Matriz, espacio de memoria bi dimensional, un array de arrays, el cual podemos acceder a sus elementos mediante indices. Almacenamiento escalable.

let matriz = [
    [1, 3, 5, 7],
    [0, 2, 4, 6],
    [8, 9, 10, 11]
]

// RECORRER POR FILA

const sacarFila = (mat, nroFila) => {
    for (let i = 0; i < mat[nroFila].length; i++) {
        console.log(mat[nroFila][i])
    }
}

sacarFila(matriz, 0) //En el caso de pasar 0, muestra: 1,3,5,7

// sacarFila(matriz, 1) //En el caso de pasar 1, muestra: 0,2,4,6

// sacarFila(matriz, 2) //En el caso de pasar 2, muestra: 8,9,10,11

console.log("-----------------------------------")

// RECORRER POR COLUMNA

const sacarColumna = (mat, nroColumna) => {
    for (let i = 0; i < mat.length; i++) {
        console.log(mat[i][nroColumna])
    }
}


// sacarColumna(matriz,0) // Al pasar el 0 nos muestra la columna: 1,0,8

// sacarColumna(matriz,1) // Al pasar el 1 nos muestra la columna: 3,2,9

 sacarColumna(matriz,2) // Al pasar el 2 nos muestra la columna: 5,4,10

// sacarColumna(matriz,3) // Al pasar el 3 nos muestra la columna: 7,6,11

console.log("-----------------------------------")


// RECORRER TODO POR FILAS

const matrizCompletaPorFilas = (mat) => {
    for (let fila = 0; fila < mat.length; fila++) {
        for (let columna = 0; columna < mat[fila].length; columna++) {
            console.log(mat[fila][columna]);
        }
    }
}

matrizCompletaPorFilas(matriz) // Debe mostrar: 1,3,5,7,0,2,4,6,8,9,10,11


console.log("-----------------------------------")

// RECORRER TODO POR COLUMNAS

const matrizCompletaPorColumnas = mat => {
    for (let columna = 0; columna < mat[0].length; columna++) {
        for (let fila = 0; fila < mat.length; fila++) {
            console.log(mat[fila][columna]);
        }
    }
}

matrizCompletaPorColumnas(matriz) // Debe mostrar: 1,0,8,3,2,9,5,4,10,7,6,11