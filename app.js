/*Crea una función que busque un elemento en un array, devolviendo 
su posición (index) e imprima el valor en la consola. Tip: utiliza 
el algoritmo de linear search. Con este ejercicio introducimos el 
concepto de algoritmo. */
var search = function (array, element){
    
    for (var i = 0; i<array.length; i++){
        if (array[i] === element) {
            return i 
        }
    }
}
console.log(search([1,2 ,3, 4, 5, 6, 7, 8], 7));// da posición 6 
console.log(search([1,2 ,3, 4, 5, 6, 7, 8], 10));//undefined no lo encuentra, porq no esta
//busqueda binaria para cosas mejores.
