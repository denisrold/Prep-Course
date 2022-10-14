// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.charAt(0).toUpperCase() + nombre.slice(1,);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0;
  for(var i = 0 ; i < numeros.length ; i++){
    suma = suma + numeros[i]; 
  }
  cb(suma);

  /*otra forma de hacerlo pero con for each
var suma = 0
numeros.forEach((elemento) =>{     ///elemento puede llamarse de cualquier forma no hace falta que se llame elemento. 
suma = suma + elemento;)};
cb(suma);
}
es una funcion dentro de otra funcion en otr funcion 

///////////
otra forma de hacerlo es con reduce: 
var sumatotal = numeros.reduce(
function(acc, curr){
  return acc+curr;
}0,
)
cb(sumatotal)

  */
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach((e)=>{ ////por cada e dentro de array. cb(e). llamo a e.
    cb(e);
  });
}

/* otra forma de resolverlo: 
for(var i = 0; i = array.length; i++){
  cb(array[i]);
}

*/

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
var pasadoporcb = [];
for(var i = 0; i < array.length; i++){
  pasadoporcb.push(cb(array[i]));
}
return pasadoporcb;
}

/*OTRA FORMA DE RESOLVERLO CON MAP. 
var nuevoArreglo = array.map(function(i){    ////podria ser elemento o otro parametro 
return cb(i)
});
return nuevoArreglo;
} 
*/

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  ///hecho con bucle for(of) para cada elemento del array. ejecuta esa funcion. lo que ponga dentro de la llave. 
var nuevoarraytito = [];
for (var i of array){
if(i[0] == 'a'){   ///porque dos veces el ==? porque puede ser a minusculo o a mayuscula no necesariamente es estrictamente === 'a'
// para la posicion 0 del indice i de array. 
nuevoarraytito.push(i);
}
} return nuevoarraytito;

}

/*Otra forma de resolverlo
con el metodo filter // crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

return array.filter(function(elements){
return elements[0]=="a"});
}


OTRA FORMA DE RESOLVERLO CON UN FOR:

var nuevoarraytito = [];
for (var i; i < array.length ; i++){
if(array[i] [0] == 'a'){                 ///porque dos veces el ==? porque puede ser a minusculo o a mayuscula no necesariamente es estrictamente === 'a'
// para la posicion 0 del indice i de array. 
nuevoarraytito.push(array[i]);
}
} return nuevoarraytito;   /// siempre cuidar que el return no quede dentro del bucle for. 

*/
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
