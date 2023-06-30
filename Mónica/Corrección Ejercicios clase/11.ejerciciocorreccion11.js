// 11-1 Calcular un promedio es una tarea extremadamente común. 
//Promedio, que es la media aritmética y se calcula sumando un 
//grupo de números y dividiendo a continuación por el recuento 
//de dichos números.
//Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let total = 0; // Inicializamos un contador a 0
  for (const number of param) { // Recorremos cada uno de los elementos y
    // y lo sumamos al contador
    total += number;
  }
  const quantity = param.length;
  console.log(total / quantity);
}

average(numbers);