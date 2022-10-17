// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arraym = [];
  for(prop in objeto){
    arraym.push([prop, objeto[prop]]);
  } return arraym;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter 
  //con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" 
  //|| Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objetoc = {};
  for(var i = 0 ; i < string.length; i++){
if (!objetoc[string[i]]){
  objetoc[string[i]] = 1;
  }
else{
  objetoc[string[i]] = objetoc[string[i]] + 1;
}
}
return objetoc;
}


/* otra forma de resolverlo

var objeto = {}
for(var i = 0 ; i < string.length; i++){
if(objeto.hasOwnProperty(string[i]){
objeto[string[i]] = objeto[string[i]] + 1}
else{objeto[string[i]] = 1;}
}
return objeto;

*/

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var enmayuscula = "";
  var enminuscula = "";

  for(var i = 0; i < s.length ; i++){
    if(s[i] === s[i].toUpperCase()){
      enmayuscula = enmayuscula + s [i];
    }
    else{enminuscula = enminuscula + s[i];}
  }
  return enmayuscula + enminuscula;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var fraseArray = str.split(' ');
for(i = 0; i < fraseArray.length; i++){
var palabraArray = fraseArray[i].split('');
var reverseArray = palabraArray.reverse();
fraseArray[i] = reverseArray.join('');}
return fraseArray.join(' ');

/*
Otra forma de resolverlo:
var fraseArray = str.split(' ');
for(i = 0; i < fraseArray.length; i++){
  
  fraseArray[i].split('').reverse().join('')}    /si se lo que estoy armando. y conozco los metodos. para cada elemento del indice. le aplico los metodos uno por uno. en cada iteracion.

  return fraseArray.join(' ')
*/
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cadena = numero.toString();
  var alverrez = ''
  alverrez = cadena.split('').reverse().join('');
  if(cadena === alverrez){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
var cadenamodificada = '';
for(elementos of cadena)
{if (elementos !== "a" && elementos !== "b" && elementos !== "c"){
  cadenamodificada += elementos;
}
}
return cadenamodificada;
}
// otra forma de resolverlo pero con for in
/*var cadenamodificada = '';
for(prop in cadena){
  if(cadena[prop]!== 'a' && cadena[prop]!== 'b' && cadena[prop] !== 'c'){
  cadenamodificada = cadenamodificada + cadena[prop];
  }
}
return cadenamodificada;}
*/


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(i = 0; i < arr.length; i++ ){
    var temp = arr[i];
    var j = i - 1;
    while(j >= 0 && temp.length < arr[j].length){
      arr[j + 1] = arr[j];
      j--
    }
    arr[j+1] = temp;
  }
  return arr;
}

/*como resolver de otra forma BUCLE FOR ANIDADO
for(var i = 0 ; i < arr.length; i++){ /// este va primero en un elemento se queda en ese
  for(var j = i + 1 ; arr.length; i++){// mientras esta en ese elemento este j recorre todo el elemento. luego i avanza al elemento siguiente.
                                       /// cuando i avanza a la posicion 1(proximo elemento.) j vuelve a recorrer todos.
if(array[i].length > array[j].length){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  }
}
}
return arr;
*/


/*OTRA SOLUCION CON .SORT 
arr.sort((a, b) ==> {
  if (a.length > b.length){
    return 1;
  }
  if(a.length < b.length){
    return -1;
  }
  return 0});
return arr 
}
*/




function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglito = [];
  for(var i = 0; i < arreglo1.length ; i++ ){
    for(var j = 0; j < arreglo2.length ; j++ ){
     if(arreglo1[i] === arreglo2[j]){
      arreglito.push(arreglo1[i]);
     }
    }
  }
  return arreglito;
}

/* OTRA FORMA DE RESOLVERLO.
METODOS DE ARRAY
.includes()  // le dice al array si existe dentro alog: che array dos vos tenes el elemento de array 1 en el indice i? si o no?


var arreglo = [];
for(var i = 0; i < arreglo1.length; i++){
if (arreglo2.includes(arreglo1[i])){
  arreglo.push(arreglo1[i]);
}
}
return arreglo;

SOLUCION CON forEach

var arreglo = [];
arreglo1.forEach((element) ==>{
if arreglo2.includes(element)) {
arreglo.push(element);}
});
return arreglo;
*/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

