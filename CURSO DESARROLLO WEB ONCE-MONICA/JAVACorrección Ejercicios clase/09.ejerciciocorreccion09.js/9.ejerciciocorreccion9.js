//Buscar la palabra más larga Completa la función que tomando un array de strings 
//como argumento devuelva el más largo, en caso de que dos strings tenga la misma 
//longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

// Uso de la función findLongestWord (string)

const avengers = [
'Hulk', 
'Thor', 
'IronMan', 
'Captain A.', 
'Spiderman', 
'Captain M.'];
// Declaramos una variable llamada argumento recibirá una lista 
function findLongestWord(list) {
    //Inicializamos una variable llamada LongestWord con valor string vacio para ir metiendo
    //si la palabra es más larga que la anterior

  
  let longestWord = " "; 
  
  // Recorremos la lsta y sacamos cada uno de los elementos (item)
  for(const item of list){
    // Si cada uno de los elementos del array es mayor su longitud que la de la vriable que
    //tenemos rriba, la sustituimos por ela , si no no hace nada.
    //Por lo tanto en cada una de las vueltas del bucle v a comprobar si el elemento mayor es 
    // el almacenado , si es así se substituirá
    if(item.length > longestWord.length){
        longestWord = item
    }
  }
//Por lo tanto, cuando termina el bucle, se nos 
console.log("La palabra mas larga es: " + longestWord);
}
// Como hemos parametrizado bien
  
