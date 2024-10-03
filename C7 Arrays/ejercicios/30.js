function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = new Set();  // Usamos un Set para almacenar los elementos que ya hemos visto

  // Recorremos el array de números
  for (let i = 0; i < numeros.length; i++) {
    if (elementosVistos.has(numeros[i])) {
      return numeros[i];  // Retorna el primer elemento repetido encontrado
    }
    elementosVistos.add(numeros[i]);  // Agregamos el número al Set
  }

  // Si no hay elementos repetidos, retorna null
  return undefined;
}

module.exports = encontrarElementoRepetido;