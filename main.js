// Problema: declarar un array que se llame clasificaciones  con los sgtes valores: 
//Sol, Eduardo,Ana, Martin, Luca, Ema
// estas personas participan de una carrera. Imprimimos la clasificación actual.
// A medida que la carrera avanza las posiciones se van cambiando, por lo que tenemos que cambiar el array:

// -Sol es eliminada y descalificada de la carrera. 
// - Eduardo adelanta a Ana. 
// -Lola es una nueva participante que empieza a encabezar la clasificacion 
// -Emma abandona la carrera por una lesión. 
// -Anunciamos cada uno d los participantes d la carrera en una lista en el siguiente 
// orden primerparticipante_segundoparticipante_ etc 
// -Lola gana la carrera.

 const clasificaciones = ["Sol", "Ana", "Eduardo", "Martin", "Luca", "Ema"]
 console.log(clasificaciones)

//sol eliminada
 clasificaciones.shift();

//edu adelanta a ana

 clasificaciones[0] = "Eduardo";
 clasificaciones[1] = "Ana";

//lola ingresa primera

 clasificaciones.unshift("Lola")

//Emma abandona la carrera 
 clasificaciones.pop("Ema")
//anunciamos a los participantes.
 console.log(clasificaciones.join('_'))
//ganador

 console.log(clasificaciones[0] + " Ganó la carrera")

// shift, pop, unshift, join y posiciones del array.



//acceder al objeto
const showroom = {
    nombre: "Bellas",
    productos: "ropa",
    stock: "disponible",
    horaApertura: 14,
    horaCierre: 20
}

console.log(showroom)

//acceder a una propiedad

console.log(showroom.nombre)
//cambiar valor a una propiedad

showroom.horaCierre = 21
//eliminar propiedad

delete showroom.stock
console.log(showroom)
//array con cada propiedad y valor basicamente un array.

console.log(Object.entries(showroom));
//array con los valores del objeto

//console.log(Object.values(showroom));

const array = [
    ["nombre", "bellas"],
    ["productos", "ropa"]
]

console.log(array[1])