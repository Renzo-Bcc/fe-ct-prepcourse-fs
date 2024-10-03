function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayuscula = array.map((str) => {return str.toUpperCase()});
  return mayuscula;
}

module.exports = convertirStringAMayusculas;
