function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // Si el array está vacío o tiene un solo elemento, consideramos que todos son "iguales"
  if (array.length === 0 || array.length === 1) {
    return true;
  }
  // Comparamos cada elemento con el primero
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false;  // Si encontramos un elemento diferente, retornamos false
    }
  }
  return true;  // Si el bucle termina sin encontrar diferencias, retornamos true
}

/**Pruebas de la función
console.log(todosIguales([1, 1, 1, 1]));        // true
console.log(todosIguales([1, 2, 1, 1]));        // false
console.log(todosIguales(['a', 'a', 'a']));     // true
console.log(todosIguales([true, true, true]));  // true
console.log(todosIguales([false, true, false])); // false
console.log(todosIguales([]));                  // true (array vacío) */
module.exports = todosIguales;
