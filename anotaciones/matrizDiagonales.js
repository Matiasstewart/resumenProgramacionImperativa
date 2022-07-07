
let matriz = [
    [1,2,3,4,5],
    [3,2,1,5,4],
    [1,2,5,4,3],
    [1,4,2,3,5],
    [2,3,5,1,4]
]

//RECORRER DIAGONAL PRINCIPAL
//La diagonal principal en una matriz es la que va de izquierda a derecha y de arriba hacia abajo.

const diagonalPrincipal = mat =>{
    for(let i=0; i<mat.length; i++){
        console.log(mat[i][i])
    }
}

//En la vuelta 1 pasara por el item (matriz[1(fila)][1(columna)])
//En la vuelta 2 pasara por el item (matriz[2][2])
//Etc...

diagonalPrincipal(matriz)

console.log("-------------------")

//RECORRER DIAGONAL PRINCIPAL DERECHA A IZQUIERDA
//En esta funcion se recorrera la diagonal pero comenzando desde la derecha.

const diagonalPrincipalDos = mat =>{
    for (let i = mat.length - 1; i >= 0 ; i--) { //Se pone el menos uno para indicar el ultimo indice.
        console.log(mat[i][i])
    }
}

diagonalPrincipalDos(matriz)

console.log("-------------------")

//RECORRER DIAGONAL SECUNDARIA
//La diagonal secundaria va de derecha a izquierda y de arriba hacia abajo.


const diagonalSecundaria = mat =>{
    for(let i=0; i<mat.length; i++){
        console.log(mat[i][mat.length-i-1])
    }
}

diagonalSecundaria(matriz)

