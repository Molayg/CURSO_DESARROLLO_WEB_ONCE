// Sumar 
// Ejercicio sumar todos los números ( sumAllNums


function sumAllNums(numbers) {
    let counter = 0;
    for (const num of numbers) {
      counter += num;
    }
    console.log(counter);
  }
  const numberList1 = [2, 50, 4, 2, 1, 89, 100];
  const numberList2 = [1, 2, 3, 4, 5, 86];
  sumAllNums(numberList1);
  sumAllNums(numberList2);
      
    
  // Función eliminar utilizando varios métodos
   //Métodosplice
  //Para eliminar un elemento de un array en JavaScript, 
  //puede usarse el método splice(). 
  //Aquí tienes un ejemplo de cómo puedes implementar la función deleteItem
  //para eliminar un elemento específico de un array:
  //Se desea la eliminación del elemento especificado en el array elementos. 
  //La función toma como parámetros el array y el elemento que se desea eliminar.
  
  function deleteItem(elementos, item) {
      const list = elementos;
      const position = list.indexOf(item);
      if (position !== -1) {
        list.splice(position, 1);
        console.log("Elemento eliminado:", item);
      } else {
        console.log("El elemento no se encontró en la lista:", item);
      }
    }
    
    const elementos = ["Agua", "Pan", "Queso", "Pipas"];
    deleteItem(elementos, "Pan");
    console.log("Lista actualizada:", elementos);
  
  // método indexOf()
  //Se desea eliminar el elemento especificado del array list. 
  //La función deleteItem busca la posición del elemento en el array utilizando el método indexOf(), 
  //y si se encuentra, utiliza el método splice() para eliminarlo. 
  //Luego se muestra un mensaje en la consola dependiendo del resultado.
  function deleteItem(elementos, item) {
    const position = elementos.indexOf(item);
    if (position !== -1) {
      elementos.splice(position, 1);
      console.log("Elemento eliminado:", item);
    } else {
      console.log("El elemento no se encontró en la lista:", item);
    }
  }
  const list = ["Agua", "Pan", "Queso", "Pipas"];
  const elementoABuscar = "Pan";
  deleteItem(list, elementoABuscar);
  console.log(list);
  
  
    
  // Ejemplo que eliminará el elemento especificado del array superheroes. 
  //La función deleteItem busca la posición del elemento en el array utilizando el método indexOf(), 
  //y si se encuentra, utiliza el método splice() para eliminarlo.
  
  function deleteItem(elementos, item) {
      const position = elementos.indexOf(item);
      if (position !== -1) {
        elementos.splice(position, 1);
      }
    }
    
    const superheroes = ["Hulk", "Spiderman", "Catwoman"];
    deleteItem(superheroes, "Spiderman");
    deleteItem(superheroes, "Batman");
    console.log(superheroes);