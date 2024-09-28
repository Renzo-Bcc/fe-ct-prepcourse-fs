function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch(idioma){
    case idioma = 'aleman':
    return 'Guten Tag!';
  case idioma = 'mandarin':
    return 'Ni Hao!';
  case idioma = 'ingles':
    return 'Hello!';
  default:
    return 'Hola!';
}
}

module.exports = saludo;
