const prompt = require("prompt-sync")({ sigint: true });

// IF 
// Condicional que nos permite ejecutar cierto codigo si sucede algo o no

let clima = prompt("Ingrese un clima: ")
let dia = prompt("Ingrese un dia de la semana: ")

if(clima == "soleado" && dia == ("domingo" || "sabado")){
    console.log("Salir a dar una vuelta")
} else if(clima == "soleado" && dia !== ("domingo" || "sabado")){
    console.log("Salir a caminar despues de las 18")
} else {
    console.log("No salgas, no está lindo")
}


// IF TERNARIO Y SWITCH
// IF TERNARIO
// Es un if abreviado, más compacto, que solo acepta dos casos posibles
// Sintaxis: condición ? expresión para el "true" : expresión para el "false"

let fruta = prompt("Ingrese una fruta: ")

let resultado = fruta == "manzana" ? "Me gustan las manzanas" : "No tengo esa fruta"

console.log(resultado)

auto = prompt("Ingrese un modelo de auto: ")

let resultado2 = auto == "Bora" ? "Me gusta el Volkswagen Bora" : `No soy tan fan del ${auto}`

console.log(resultado2)


// SWITCH 
// Pregunta por algo -> Si ese algo es verdadero -> Ejecuta un bloque de código

let mes = prompt("Ingrese un mes del año: ")
switch (mes){
    case ("enero" || "febrero"):
        console.log("Estoy de vacaciones")
        break;
    case ("marzo" || "abril" || "mayo" || "junio"):
        console.log("Tengo que cursar")
        break;
    case ("julio" || "agosto" || "septiembre"): 
        console.log("Hace frio, es invierno")       
        break;
    default:                                        //Se usa cuando no se cumple ninguna de las condiciones estipuladas
        console.log("Resto del año")
        break;
}

let semaforo = prompt("Ingrese el color del semaforo: ")

switch(semaforo){
    case "verde":
        console.log("Podés cruzar tranquilo")
        break;
    case "amarillo":
        console.log("Guarda, anda frenando")
        break;
    default:
        console.log("Frená, no se puede cruzar")
        break;        
}