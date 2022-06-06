let nombre = "Matias"
let apellido = "Stewart Usher"

let nombreCompleto = nombre + " " + apellido;

let nombreCompletoV2 =  `${nombre} ${apellido}`; 

console.log(nombreCompleto);
console.log(nombreCompletoV2);

/* SUMA */
// Sirve para sumar numeros

console.log(1 + 7);

/* RESTA */
// Sirve para restar numeros

console.log(7 - 1);

/* MULTIPLICACION */
// Para multiplicar numeros

console.log(4 * 4);

/* DIVISION */
//Para dividir numeros

console.log(20 / 4);

/* ASIGNACION */
// para asignar un valor, ej a una variable

let numero = 6;

numero = 8;

console.log(numero);

/* MODULO */
// Retorna el resto de una division

console.log(20 % 4);  //En este caso deberia retornar 0
console.log(21 % 4);  //En este caso deberia retornar 1

/* INCREMENTO */
//Incrementa un numero en 1

let ejemplo = 8;

ejemplo++

console.log(ejemplo);

/* DECREMENTO */
//Decrementa un numero en 1

let ejemplo2 = 8;

ejemplo2--

console.log(ejemplo2);

/* COMPARACION */
//Compara si los valores son iguales y devuelve un "true" o un "false"
let numeroDePrueba = 1;

console.log(numeroDePrueba == '1'); //reconoce al numero 1 por más que este dentro de un string
console.log(numeroDePrueba == 1); 


/* COMPARACION ESTRICTA */
//Compara no solo el valor sino tambien el tipo de dato

console.log(numeroDePrueba === '1'); //En este caso seria False, porque por mas que sea el mismo numero son distintos tipos de datos
console.log(numeroDePrueba === 1); // True porque es el mismo numero y el mismo tipo de dato


/* DESIGUALDAD SIMPLE */
//  devuelve true o false si es desigual

console.log(8 != 8); // false, es igual tanto el numero como el tipo de dato
console.log(8 != 9); //true, es diferente el numero pero no el tipo de dato
console.log(8 != "8");  //false, es igual el numero pero no el tipo de dato

/* DESIGUALDAD ESTRICTA */
//Compara y si el numero es diferente o el tipo de dato devuelve "true"

console.log(10 !== 10); //false, es el mismo numero y tipo de dato
console.log(10 !== "10"); //true, distinto tipo de dato pero mismo numero
console.log(10 !== "11"); //true, es distinto el numero y el tipo de dato
console.log(10 !== 11); //true, distinto numero mismo tipo de dato

/* MAYOR */
//Compara y devuelve "true" o "false" dependiendo si es o no mayor

console.log(5 > 6) //false, 5 no es mayor que 6
console.log(7 > 5) //true, 7 es mayor que 6

/* MAYOR O IGUAL */
//Compara y devuelve "true" o "false" dependiendo si es o no mayor o igual

console.log(5 >= 5) //true, es igual
console.log(6 >= 5) //true, es mayor

/* MENOR */
//Compara y devuelve "true" o "false" dependiendo si es o no menor

console.log(5 < 6) //true, 5 es menor que 6
console.log(6 < 6) //false, 6 no es menor que 6

/* MENOR O IGUAL */
//Compara y devuelve "true" o "false" dependiendo si es o no menor o igual

console.log(5 <= 5) //true, es igual
console.log(6 <= 4) //false, 6 es mayor que 4



/* OPERADORES LOGICOS */
/* AND */
/* OR */
/* NEGACION */
/* CONCATENACION */

