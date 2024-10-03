function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  // Si el array está vacío, retornamos null
  if (numeros.length === 0) {
    return null;
  }

  // Recorremos el array para encontrar el número faltante
  for (let i = 0; i < numeros.length - 1; i++) {
    // Si la diferencia entre dos números consecutivos no es 1, encontramos el número faltante
    if (numeros[i + 1] !== numeros[i] + 1) {
        return numeros[i] + 1;
    }
  }

  // Si no se encontró ningún número faltante, retornamos null
  return null;
}

module.exports = encontrarNumeroFaltante;