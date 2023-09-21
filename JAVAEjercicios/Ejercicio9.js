//Puedes usar este array PARA PROBAR TU FUNCIÓN
//Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en
//caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(list) {
  let maxLength = 0;
  let longestWord = "";

  for (let i = 0; i < list.length; i++) {
    if (list[i].length > maxLength || (list[i].length === maxLength && i === 0)) {
      maxLength = list[i].length;
      longestWord = list[i];
    }
  }

  return longestWord;
}

const longestAvenger = findLongestWord(avengers);
console.log(longestAvenger); 