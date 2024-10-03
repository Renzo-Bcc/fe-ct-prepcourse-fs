function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let pares = [];
  for (let i = 0; i < array.length; i++){
    if(typeof array[i] === 'number' && array[i] % 2 === 0){
      pares.push(array[i]);
    }
  }
  return pares;
}

module.exports = filtrarNumerosPares;
