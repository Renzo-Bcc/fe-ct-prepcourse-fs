function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  // Convertimos el texto a minúsculas y removemos todos los espacios y caracteres especiales
  let textoLimpio = string.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Comparamos el texto original limpio con su versión invertida
  return textoLimpio === textoLimpio.split('').reverse().join('');
}

module.exports = esPalindromo;