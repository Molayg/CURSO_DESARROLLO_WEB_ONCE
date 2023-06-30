//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que
//existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
const duplicates = [
'sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda'
];
function removeDuplicates(param) {
const uniques = [] ;
 // se crea un array vacio
for (const element of param) { // Se recorren con un bucle los elementos del array inicial
    if (!uniques.includes(element)){ // Si el array uniques no incluye el elemento
    // Lo empujamos dentro
    uniques.push(element);
    }
}
console.log(uniques);

}
removeDuplicates(duplicates);