function devolverString(string) {
  // La función recibe un argumento llamado string.
  // Debe retornar dicho string.
  // Por ejemplo: 
  // "texto" ---> "texto" 
  // "hola mundo" ---> "hola mundo" 
  // "SoyHenry" ---> "SoyHenry" 
  // Tu código:
  if (typeof string === 'string'){
    return string;
  }else{
    return 'Error: Inserte un String';
  }
}

module.exports = devolverString;