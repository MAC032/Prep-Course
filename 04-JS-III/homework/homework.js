// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var lA = array.length;
  for (i = 0; i < lA; i++) {
    array [i] = array [i] + 1;
  } 
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var A1 = palabras.length; //Cantidad de elementos del array
  St = '';
  for (i = 0; i < A1; i++) {
    if (i < A1-1) {
      St = St + palabras [i] + ' ';
    }
    if (i === A1-1) St = St + palabras [i];
  }
  return St;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var A2 = array.length;
  for (i = 0; i < A2; i++) {
    if (array [i] === elemento) return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var A3 = numeros.length;
  var Suma = 0;
  for (i = 0; i < A3; i++) {
     Suma = Suma + numeros [i];
  }
  return Suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var A4 = resultadosTest.length;
  var Suma = 0;
  var Prom = 0;
  for (i = 0; i < A4; i++) {
    Suma = Suma + resultadosTest [i];
  }
  Prom = Suma / A4;
  return Prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var A5 = numeros.length;
  var Mayor = 0;
  for (i = 0; i < A5; i++) {
    if (Mayor < numeros [i]) {
      Mayor = numeros [i];
    }
  }
  return Mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var A6 = arguments.length;
  var Multi = 1;
  if (A6 === 0) return 0;
  if (A6 === 1) return arguments [0];
  for (i = 0; i < A6; i++) {
    Multi = Multi * arguments [i];
  }
  return Multi;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var A7 = arreglo.length;
  var Contador = 0;
  for (i = 0; i < A7; i++) {
    if (arreglo [i] > 18) Contador++;
  }
  return Contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia > 1 && numeroDeDia < 7) return 'Es dia Laboral';
  return 'Es fin de semana';
}  


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numToString = n.toString ();
  if (numToString.charAt (0) === '9') return true;
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var A8 = arreglo.length;
  var Compara = arreglo [0];
  var Contador = 1;
  for (i = 1; i < A8; i++) {
    if (Compara === arreglo [i]) Contador++;
  }
  if (Contador === A8) return true;
  return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var A9 = array.length;
  var A10 = [];
  for (i = 0; i < A9; i++) {
    if (array [i] === 'Enero'|| array [i] === 'Marzo' || array [i] === 'Noviembre') {
      A10.push (array [i]);
    }
  }
  if (A10.length < 3) return 'No se encontraron los meses pedidos';
  return A10;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var A11 = array.length;
  var A12 = [];
  for (i = 0; i < A11; i++) {
    if (array [i] > 100) A12.push (array [i]);
  }
  return A12;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var A13 = [];
  var Aumenta = numero;
  for (i = 0; i < 10; i++) {
    Aumenta += 2; //equivalente a --> Aumenta = Aumenta + 2
    if (Aumenta === i) break;
    else {
      A13.push (Aumenta);
    }
  }
  if (i < 10) return "Se interrumpió la ejecución";
  return A13;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var A14 = [];
  var Aumenta = numero;
  for (i = 1; i <= 10; i++) {
    if (i === 5) continue;
    else {
      Aumenta += 2;
      A14.push (Aumenta);
    }
  }
  return A14;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
