/* TRADICIONALES */
/* STRING */
let nombre = "Matias";
let apellido = "Stewart Usher"; // cadenas de texto formada por caracteres unidos

console.log(nombre);
console.log(apellido);

/* NUMBER */
let edad = 22; //valores numericos

console.log(edad);

/* BOOLEAN */
let esArgentino = true // verdadero o falso

console.log(esArgentino)

/* ESPECIALES */
/* Nan (Not A Number) */
let nan = "a" * 4; //cuando js determina que no es ni un string ni un numero, un caso es una operación matematica entre un numero y una letra

console.log(nan);

/* NULL */
let bondi = null; //Cuando desconocemos lo que hay en una variable, en este caso desconocemos la cantidad de pasajeros en el colectivo

console.log(bondi);

/* OBJETO LITERAL */
let auto = {
    marca : "Audi",
    modelo : "A3",
    año : 2014,
    ruedas : 4, //para poder incluir mucha info dentro de una variable, consta de "claves" y "valores" separados por comas
};

console.log(auto);

/* ARRAY */
let peliculas = ["Cars", "Transformers", "terminator", "Buscando a Nemo"]; //para poder almacenar muchos datos, cuenta con un indice numerico

console.log(peliculas);