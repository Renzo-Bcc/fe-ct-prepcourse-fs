function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num > 99 && num <= 999){
    return true;
  }else{
    return false;
  }
}

/** OTRA FORMA DE HACER EL EJERCICIO:
 * function tieneTresDigitos(num){
 *  return Math.abs(num).toString().length === 3;
 * }
 * console.log(tieneTresDigitos(-99)); //false
 * console.log(tieneTresDigitos(-199)); // true
 */

module.exports = tieneTresDigitos;
