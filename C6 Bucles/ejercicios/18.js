function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  producto = 1;
    for(var i = a; i < b + 1; i++){
      producto = producto * i;
      if(producto === -0){
        return 0;
      }
      //console.log(producto);
    }
    return producto;
}

module.exports = productoEntreNúmeros;