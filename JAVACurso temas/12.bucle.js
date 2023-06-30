// Los bucles son herrmientas muy útiles en Js o en cualquier otro lenguajes
//Sirven para ejecutar una acción o conjunto de acciones varias veces, según una CONDICION o una serie de condiciones.
// Hay varios bucles en Js. con su propia sintexias y usos específicos.

// 12.1.- Bucle for. 
//El Bucle for, se utiliza para ejecutar un bloque de códico un número determinadode veces
//La sintaxis es la siguiente: esta es una variable que va a cambiar


//for (inicialización; condición; actualización) {
   

    //La inicialización se ejecuta una vez al principio del bucle y suele utilizarse para inicializar 
    //una variable de control. La condición se evalúa al principio de cada iteración del bucle y, si se cumple, 
    //se ejecuta el bloque de código. Si la condición no se cumple,
    //el bucle termina. Por último, la actualización se ejecuta al final de cada iteración del
    //bucle y suele utilizarse para modificar la variable de control. 
    //Ejemplo de un bucle for que imprime los números del 1 al 10:

    for (let i = 0; i < 5; i++){
        console.log("Hola", i);
    }
    // Recorrido arrays
    const movies = ["Batman", "Terminator", "Bambi", "Matrix"];

    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        console.log(movie);
    }
    // CAMARA LENT - MOVIES.LENGTH = 4
    //ejecutamos el fichero... y arranca el bucle
    // 1ª VUELTA -> i = 0 -> si es menor que movies.length->
    //Para la siguiente vuelta ++
    //const movie = movies[0] ->"Batman"
    //console.log(movie) -> "Batman";

    // 2ª VUELTA -> i = 1 -> si es menor que movies.length
    //const movie = movies[1] -> "Terminator"
    //console.log(movie) = "Terminator";

    // 3ª VUELTA -> i = 2 -> si es menor que movies.length
    //const movie = movies[1] = "Bambi"
    //console.log(movie) = "Bambi";
    // 4ª VUELTA -> i = 3 -> si es menor que movies.length ->
    //const movie = movies[1] = "Matrix"
    //console.log(movie) = "Matrix";

    // Otro ejemplo:
    let list = ["A","B","C"] // longitud 3 elementos
    for (let i = 0;i<list.length; i++) {
        const element = list [i]
        console.log(list);
        console.log(element);
    }
       


    
    // 1ª VUELTA -> i = 0 ; i++ -> list [0] si es menor que movies.length->
    // 2ª VUELTA -> i = 1 ; i++ -> list [1]
    // 3ª VUELTA -> i = 2 ; i++ -> list [2]
    // 4ª VUELTA -> i = 3 ;

    // Otro ejemplo:
    for (let i= 0; i<10; i++)
    {
        if(i===5){
            console.log("Hola, soy un cinco");
        } else {
            console.log(i);
        }
    }


//En este caso, la variable i se inicializa a 1 al principio del bucle. Luego, se evalúa la condición i <= 10 , 
//que se cumple mientras i sea menor o igual que 10. Por tanto, se ejecuta el bloque de código, que imprime el 
//valor de i en la consola. Al final de cada iteración, se ejecuta la actualización i++ , que incrementa el valor de i en 1.

