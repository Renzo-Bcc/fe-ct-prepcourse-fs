function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tabla = [];

  // Bucle para generar la tabla de multiplicar del 6 (del 0 al 10)
  for (let i = 0; i <= 10; i++) {
    tabla.push(i * 6);  // Multiplicamos cada número del 0 al 10 por 6 y lo añadimos al array
  }

  return tabla;
}

module.exports = tablaDelSeis;
