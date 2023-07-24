//Switch
//La sentencia "switch"
//Una sentencia switch puede reemplazar múltiples condiciones if.

//Provee una mejor manera de comparar un valor con múltiples variantes.

//La sintaxis
//switch tiene uno o mas bloques casey un opcional default.

//Se ve de esta forma:

//switch(x) {
  //case 'valor1':  // if (x === 'valor1')
  //  ...
    //[break]

  //case 'valor2':  // if (x === 'valor2')
   // ...
    //[break]

  //default:
  //  ...
  //  [break]
//}
//El valor de x es comparado contra el valor del primer case (en este caso, valor1), luego contra el segundo (valor2) y así sucesivamente, todo esto bajo una igualdad estricta.
//Si la igualdad es encontrada, switch empieza a ejecutar el código iniciando por el primer case correspondiente, hasta el break más cercano (o hasta el final del switch).
//Si no se cumple ningún caso entonces el código default es ejecutado (si existe).


// Ejercicios

const superheroe = "Spiderman";
switch (superheroe) {
  case "Spiderman":
    console.log("Me llamo Peter Parker");
    break;
  case "Daredevil":
    console.log("Me llamo Matt Murdock");
    break;
  case "Hulk":
    console.log("Me llamo Bruce Banner");
    break;
  default:
    console.log("No sé cómo te llamas");
}
    
if (superheroe === "Spiderman") {
    console.log("Me llamo Peter Parker");
  } else if (superheroe === "Peter Parker") {
    console.log("Mi superhéroe es Spiderman");
  }
  
  if (superheroe === "Daredevil") {
    console.log("Me llamo Matt Murdock");
  } else if (superheroe === "Matt Murdock") {
    console.log("Mi superhéroe es Daredevil");
  }
  
  if (superheroe === "Hulk") {
    console.log("Me llamo Bruce Banner");
  } else if (superheroe === "Bruce Banner") {
    console.log("Mi superhéroe es Hulk");
  }
//
const age = 17;
if (age <= 17) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}
//Ternario ->
// 1º Condición
// 2º Que pasa cuando se cumple
//3º Que pasa cuando no -> else
age >= 18 ? console.log("Puede conducir") : console.log(" No puedes conducir");  // Para decir que la condición no se 
                                                                //cumple se utilizan los dos puntos :

//AND operator

age >= 18 && console.log("Puedes conducir")

if (age >= 18) {
    console.log("Puedes conducir");
}