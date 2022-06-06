// CICLOS FOR

const prompt = require("prompt-sync")({ sigint: true });

let vueltas = parseInt(prompt("Ingrese un numero de vueltas: "))


let funcionVueltas = vueltas => {

    for (let i = 0; i <= vueltas; i++) {                    //1er parametro, Desde. 2do parametro, hasta. 3er parametro, cada cuanto. 
        console.log(`Esta es la vuelta ${i}`)
    }

}

funcionVueltas(vueltas)


let mensaje = prompt("Ingrese una palabra para el lorito: ")

let loro = mensaje => {
    for (let i = 0; i < 5; i++) {
        console.log(mensaje)
    }
}

loro(mensaje)

let numero = parseInt(prompt("Ingrese su numero para saber cuantos impares hay dentro: "))

let noParesDeContarImparesHasta = (numero) => {
    let contador = 0

    for (let i = 0; i <= numero; i++) {
        i % 2 !== 0 ? contador += 1 : ""
    }

    return contador
}

console.log(noParesDeContarImparesHasta(numero))




// CICLOS WHILE

let numeroAMultiplicar = parseInt(prompt("Ingrese un numero para saber su tabla: "))

function tablaDeMultiplicar(numero) {
	let i = 1;
	while(i<=10){
		console.log(numero + ' * ' + i + ' = ' + numero * i);
		i ++
	}  
}

tablaDeMultiplicar(numeroAMultiplicar)

