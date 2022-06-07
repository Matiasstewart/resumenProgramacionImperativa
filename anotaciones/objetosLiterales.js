
// OBJETOS LITERALES
// Entidad independiente con propiedades. Estas propiedades tienen valores.
// Dentro de estos encontramos claves y un valor para esta.

let pais ={
    nombre: "Argentina",
    poblacion: 47327407,
    capital: "Buenos Aires",
}

// Para acceder a aluna de sus propiedades ultilizamos dot notation.

console.log(`La capital de ${pais.nombre} es ${pais.capital}`)

console.log("------------")

console.log(pais) // Mostramos el objeto completo

console.log("------------")


// METODOS
// Son funciones que se asignan como valor a una clave y que buscan hacer algo más que simplemente almacenar un dato.

// THIS
// Lo usamos para referirnos a otras claves de ese mismo objeto.
// Es una buena practica porque si utilizamos el nombre el objeto, este puede cambiar generando errores, de esta forma nos aseguramos que si cambia el nombre no dejara de andar correctamente.

let mascota ={
    nombre: "Manchas",
    edad: 7,
    animal: "Perro",
    decirNombre: function(){
        return "El nombre de mi "+ this.animal +" es " + this.nombre
    }
}

console.log(mascota.decirNombre())  // Es importante poner los parentesis "()" para ejecutar la funcion que se encuentra dentro del objeto.


console.log("------------")
