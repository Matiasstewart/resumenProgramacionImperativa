// BUBBLE SORT DE ARRAY DE OBJETOS POR CONDICION
// Al recorrer un objeto teniendo en cuenta una condición hay que tener presente que debemos ordenar los objetos enteros, no cambiar los valores de las condiciones.

let personas =[{
    nombre: "Matias",
    edad:22,
    pais: "Argentina"
},{
    nombre: "Magali",
    edad:20,
    pais: "Argentina"
},{
    nombre: "Agusto",
    edad:30,
    pais: "Brasil"
},{
    nombre: "Alex",
    edad:21,
    pais: "Estados Unidos"
}
]

const ordenPorEdad = arr => {
    let aux
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[j].edad > arr[j + 1].edad) {    
                aux = arr[j] //NO PONER aux = arr[j].edad
                arr[j] = arr[j + 1] //NO PONER arr[j].edad = arr[j + 1].edad 
                arr[j + 1] = aux //NO PONER arr[j + 1].edad = aux (Si hacemos esto modificariamos los objetos)
            }
        }
    }
}

ordenPorEdad(personas)

console.log(personas)

console.log("-----------------------")

// FUNCION QUE ACEPTA PARAMETROS
// Para esta funcion usamos la bracket notation

let personasDos =[{
    nombre: "Matias",
    edad:22,
    pais: "Argentina",
    idiomas: 3
},{
    nombre: "Magali",
    edad:20,
    pais: "Argentina",
    idiomas: 2
},{
    nombre: "Agusto",
    edad:30,
    pais: "Brasil",
    idiomas: 2
},{
    nombre: "Alex",
    edad:21,
    pais: "Estados Unidos",
    idiomas: 1
}
]

const ordenarPorPropiedad = (arr,prop)=>{
        let aux
        for (let i = 0; i < arr.length; i++) {
    
            for (let j = 0; j < arr.length - 1; j++) {
    
                if (arr[j][prop] > arr[j + 1][prop]) {    
                    aux = arr[j] 
                    arr[j] = arr[j + 1] 
                    arr[j + 1] = aux 
                }
            }
        }
}

ordenarPorPropiedad(personasDos,"idiomas") // Lo ordenamos por la cantidad de idiomas que sabe.

console.log(personasDos)

console.log("---------------------------")

ordenarPorPropiedad(personasDos,"pais") // Lo ordenamos alfabeticamente por el pais.

console.log(personasDos)


