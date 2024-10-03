function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let resultado = []; // Array para almacenar los valores
  let iteraciones = 0;

  // Bucle que itera hasta 10 veces
  while (iteraciones < 10) {
    num += 2; // Aumentamos el número en 2
    iteraciones++; // Aumentamos el contador de iteraciones

    resultado.push(num); // Almacenamos el nuevo valor en el array

    // Si el número coincide con el número de iteraciones, interrumpimos la ejecución
    if (num === iteraciones) {
      return 'Se interrumpió la ejecución';  // Interrumpimos el bucle
    }
  }
  return resultado; // Retornamos el array con los resultados
}

/**Pruebas de la función
console.log(incrementarEnDos(0));  // Aumenta el número en 2 hasta 10 iteraciones
console.log(incrementarEnDos(5));  // Se interrumpe si el número coincide con las iteraciones */
module.exports = breakStatement;
