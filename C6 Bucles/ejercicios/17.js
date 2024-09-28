function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  switch(color){
    case color = 'blue':
      return 'This is blue';
    case color = 'red':
      return 'This is red';
    case idioma = 'green':
      return 'This is green';
    case color = 'orange':
      return 'This is orange';
    default:
      return 'Color not found';
  }
}

module.exports = colors;
