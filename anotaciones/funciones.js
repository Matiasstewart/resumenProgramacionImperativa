/* FUNCIONES */
// Por más que funcione sin parametros, hay que ponerle los "()" vacios
/* FUNCION DECLARADA */
// Se carga antes que todo

let sumar = function(numeroA,numeroB){
    return numeroA + numeroB;
}

console.log(sumar(10,15)); //Si no se le pasa ningun parametro retorna Nan

/* FUNCION EXPRESADA */
// Se carga en esa linea de codigo

function restar(numeroC, numeroD){
    return numeroC - numeroD
}

console.log(restar(15,10))


/* VALORES POR DEFECTO */

let bienvenida = function(name="Usuario", surname="Desconocido"){ //Asignamos valores por defecto, por si el la funcion no recibe determinado parametro
    return `Hola ${name} ${surname}`
}

console.log(bienvenida()) //La función no recibe ningún parametro
console.log(bienvenida("carlos")) //La función recibe un solo parametro
console.log(bienvenida("carlos", "Gomez")) //La función resibe ambos parametros



/* SCOPES */
// Alance de las variables en nuestro documento

let saludo = "Hola" //Scope Global, alcanza a todo el documento
let color = "rojo"

function saludar(){
    let saludo = "Chau" //Scope Local, solo alcanza a la función
    return `${saludo} color ${color}`
}

console.log(saludo)
console.log(saludar())

/* EXTRA */
function dinero(valor){
    return "$".repeat(valor)
}

console.log(dinero(2))
console.log(dinero(5))

/* ARROW FUNCTIONS */
// Forma más acotada de escribir funciones

function multiplicar(a,b){
    return a*b
}

//use dividir para que no se choquen
let dividir = (a,b) => a / b; //Arrow function, no se usa el return, se escribe en una sola linea

console.log(multiplicar(5,5))
console.log(dividir(20,4))

let laMitad = num => num/2; //un solo parametro no necesita parentesis

console.log(laMitad(8))

let cancion = () => "Paradise";

console.log(cancion())

let esMultiplo = (n, n2) => {
    let resto = n % n2;
    return resto == 0; //Si escribimos en varias lineas necesitaremos "{}"
}

console.log(esMultiplo(4,2))

