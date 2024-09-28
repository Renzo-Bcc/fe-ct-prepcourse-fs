function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  switch(numero){
    case numero = 1:
      return 'Lunes';
    case numero = 2:
      return 'Martes';
    case numero = 3:
      return 'Miercoles';
    case numero = 4:
      return 'Jueves';
    case numero = 5:
      return 'Viernes';
    case numero = 6:
      return 'Sabado';
    case numero = 7:
      return 'Domingo';
    default:
        return 'No es un dia de la semana';
  }
}

module.exports = obtenerDiaSemana;