// ALGORITMOS DE BUSQUEDA

// Algoritmo de busqueda lineal:
// YA NO SE USA
// Busca elemento por elemento
// Se podria decir que es de fuerza bruta
// Ej: encontrar el 5
// 0 -> 2 -> 3 -> 4 -> (5) <- 7 - 8 - 9

// Algoritmo de busqueda binaria
// Divide las listas en dos partes y compara valores, para descartar opciones.
// Los elementos deben estar ordenados.

const BinarySearch = (elementos, elementoAEncontrar)=>{
    let minimo = 0 
    let maximo = elementos.length -1 
    
    while(minimo<=maximo){  //Mientras el minimo sea menor o igual que el maximo

        let mid = Math.floor((minimo + maximo) / 2); //Sacamos el medio del array, usamos floor para redondear en el caso de que sea un array impar

        if (elementos[mid] === elementoAEncontrar) { //Si el elemento en el medio del array es igual al elemento buscado, retornamos eso
			return mid;
		}

        if (elementos[mid] > elementoAEncontrar) { //Si el elemento en el medio del array es mayor al elemento que buscamos
			maximo = mid - 1; //Le asignamos el indice del medio del arreglo al MAXIMO menos uno, porque "mid" ya lo comparamos
		} else { //Si el elemento en el medio del array es menor...
			minimo = mid + 1;  //Le asignamos el indice del medio del arreglo al MINIMO mas uno, porque "mid" ya lo comparamos
		}    
    }

    return null //Si no se encuentra el elemento retornamos null.
}


let numeros=[1,2,6,8,9,14,16,17,18,20,22,28,31,35,38,45,48,51,54,60]

console.log(BinarySearch(numeros, 14)) // Retorna la posicion numero 5
console.log(BinarySearch(numeros,21)) // Retorna NULL ya que no se encuentra ese elemento