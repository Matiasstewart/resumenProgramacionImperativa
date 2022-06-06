/* VAR (No se usa) */
/* pueden ser modificadas y re-declaradas */
/* Funciona en todo el codigo no solo en el bloque */

var provincia = "Buenos Aires";

console.log(provincia)

if (true){
    provincia = "San Juan"
    console.log(provincia)
}

/* LET */ 
/* Pueden ser modificadas, pero no re-declaradas*/
/* funciona solo en el bloque en el que es declarado */

// Con la declaracion de variables a traves de "let" podemos modificar su contenido asignandole un nuevo valor, pero no podemos re definirla
let nombre = "matias";

/*let nombre = "marcos" */ //nos daria error si ya fue definido
nombre = "alex" // no da error, se puede modificar

console.log(nombre)

if (true){
    let nombre = "juan" //se puede declarar dentro de otro bloque de codigo sin problemas
    console.log(nombre)
}


/* CONST */
/* no pueden ser modificadas ni re-declaradas */
/* funciona solo en el bloque en el que es declarado */
/* Es buena practica declararlas siempre con Mayusculas */

const COLOR = "Rojo";

/* const color = "azul";*/  //Esto no es valido, no de puede definir 2 veces

/* color = "Blanco"; */ //Esto tampoco es valido, no de puede modificar en ningun otro sector del codigo

console.log(COLOR);

if (true){
    const COLOR = "verde"; //funciona
    console.log(COLOR)
}


/* Ejemplo de porque Var no se usa */

if (true){
    /* let letra = "A" */ // let nos daria error ya que lo estamos tratando de llamar desde fuera
    var numero = "1" //var nos funciona al llamarlo desde afuera
}

/* console.log(letra) */
console.log(numero)