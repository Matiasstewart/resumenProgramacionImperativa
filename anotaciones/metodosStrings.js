let frase = "Hola mundo!"

// .LENGTH
// Devuelve la cantidad de caracteres presente en un string
// Cuenta los espacios (" ") como caracteres

console.log(frase.length)


console.log("---------------------------")

// .INDEX OF ("X")
// Recibe como parametro una cadena de texto y la busca dentro del string

console.log(frase.indexOf("mundo"))  // Devuelve 5 que es el numero del indice donde se inicia el string solicitado
console.log(frase.indexOf("o"))      // Devuelve 1 que es el numero del indice donde se inicia el string solicitado
console.log(frase.indexOf("Mundo"))  // Devuelve -1 ya que no encuentra el string porque se escribio con el primer caracter en mayuscula

console.log("---------------------------")

// .SLICE ("N","M")
// Como su nombre lo indica retorna una porción del string, acepta dos parametros, el 1ro es "desde" donde tomara la porción, el 2do es "hasta" donde recortara el string.
// Si no le pasamos un 2do parametro lo hace hasta el final del string.
// No modifica el string original, podemos almacenar el recorte en una variable.

console.log(`Frase original: ${frase}`)

console.log(frase.slice(2,7))   // Retornara "la mu"
console.log(frase.slice(2))     // Retornara "la mundo!"
console.log(frase.slice(-6))    // Retornara "mundo!" (acepta valores negativos)
console.log(frase.slice(-6,-1)) // Retornara "mundo" (acepta valores negativos)

console.log("---------------------------")

// .TRIM () 
// Elimina los espacios tanto al comienzo como al final, no en el medio.

let fraseConEspacios = " Hola mundo! "
let fraseConMuchosEspacios = "           Hola mundo!           "

console.log(`Frase con espacios: ${fraseConEspacios}`)
console.log(`Frase con muchos espacios: ${fraseConMuchosEspacios}`)


console.log(fraseConEspacios.trim())
console.log(fraseConMuchosEspacios.trim()) //Podemos observar que el mensaje se muestra de la misma manera ya que solo saca los espacios del comienzo y del final sin importar su cantidad.

console.log("---------------------------")

// SPLIT("x")
// Sirve para convertir un string a un array, pasandole por parametro donde queremos que haga los cortes.

let fraseParaSplit = "Hola, esto es una frase, Para que sirve el split?"

console.log(`Frase original: ${fraseParaSplit}`)

console.log(fraseParaSplit.split(" "))      //En este caso cortará el string por los espacios
console.log(fraseParaSplit.split(", "))     //En este caso cortará el string, donde se encuentre una coma y un espacio (", ")

console.log("---------------------------")

// REPLACE("X","Y")
// Se usa para reemplazar determinado string ("X") por otro string ("Y"), dentro de un string original.
// No altera la cadena de texto original

let fraseParaReplace = "Me encanta jugar al fútbol"

console.log(`Frase original: ${fraseParaReplace}`)


console.log(fraseParaReplace.replace("fútbol", "rugby"))    // Cambiara "fútbol" por "rugby"

console.log("---------------------------")



