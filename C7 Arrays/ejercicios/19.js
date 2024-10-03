function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  // Si no se pasan argumentos, retorna 0
  if (arguments.length === 0) {
    return 0;
  }
  // Si se pasa un solo argumento, lo retorna directamente
  if (arguments.length === 1) {
    return arguments[0];
  }
  // Multiplicamos todos los argumentos
  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  
  return producto;
}
/**Pruebas de la función
console.log(multiplicarArgumentos());           // 0 (no se pasan argumentos)
console.log(multiplicarArgumentos(5));          // 5 (un solo argumento)
console.log(multiplicarArgumentos(2, 3, 4));    // 24 (2 * 3 * 4)
console.log(multiplicarArgumentos(1, -2, 3));   // -6 (1 * -2 * 3)
console.log(multiplicarArgumentos(10, 20));     // 200 (10 * 20) */

module.exports = multiplicarArgumentos;
