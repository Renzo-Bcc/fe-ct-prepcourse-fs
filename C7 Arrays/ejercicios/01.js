function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  //var primero = array[0];
  var primero = array.shift();
  return primero;
}

module.exports = devolverPrimerElemento;
