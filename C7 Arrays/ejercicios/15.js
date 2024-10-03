function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {
    return 0;
  }

  let indiceMayor = 0;  

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }

  return indiceMayor;
}
/** Pruebas de la función
console.log(encontrarIndiceMayor([1, 2, 3, 4, 5]));    // 4 (índice de 5)
console.log(encontrarIndiceMayor([10, 20, 30, 25]));   // 2 (índice de 30)
console.log(encontrarIndiceMayor([-1, -5, -10, -3]));  // 0 (índice de -1)
console.log(encontrarIndiceMayor([]));                 // 0 (array vacío) */

module.exports = encontrarIndiceMayor;
