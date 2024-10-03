function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesEncontrados = [];
  let mesesBuscados = ["Enero", "Marzo", "Noviembre"];

  // Recorremos el arreglo de meses
  for (let i = 0; i < array.length; i++) {
    if (mesesBuscados.includes(array[i])) {
      mesesEncontrados.push(array[i]);
    }
  }
  // Verificamos si se encontraron todos los meses buscados
  if (mesesEncontrados.length === mesesBuscados.length) {
    return mesesEncontrados;
  } else {
    return 'No se encontraron los meses pedidos';
  }
}

/**Pruebas de la función
console.log(encontrarMeses(["Enero", "Febrero", "Marzo", "Abril", "Noviembre"])); // ["Enero", "Marzo", "Noviembre"]
console.log(encontrarMeses(["Enero", "Febrero", "Abril", "Mayo"]));               // "No se encontraron los meses pedidos"
console.log(encontrarMeses(["Marzo", "Noviembre", "Diciembre"]));                 // "No se encontraron los meses pedidos" */

module.exports = mesesDelAño;
