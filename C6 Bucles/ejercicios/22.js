function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  do{
    var i = 1;
    i += 1;
    num = num + (5 * 8);
    return num;
  }while(i <= 8);
}

module.exports = doWhile;