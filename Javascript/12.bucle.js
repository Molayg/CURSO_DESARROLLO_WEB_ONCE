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

    //Bucles
for (let i = 0; i < 5; i++) {
	console.log("Hola", i);
}

//Recorriendo arrays
const movies = ["Batman", "Terminator", "Bambi", "Matrix"];

for (let i = 0; i < movies.length; i++) {
	const movie = movies[i];
	console.log(movie);
}
//CAMARA LENTA - MOVIES.LENGTH = 4
//EJECUTAMOS EL FICHERO...Y ARRANCA EL BUCLE
//1ª VUELTA -> i = 0 -> i si es menor que movies.length -> Para la siguiente vuelta ++
//const movie = movies[0] -> Batman
//console.log(movie) -> Batman
//2ª VUELTA -> i = 1 -> i si es menor que movies.length ->
//Para la siguiente vuelta ++
//const movie = movies[1] = "Terminator";
//console.log(movie) -> "Teminator"
//3º VUELTA -> i = 2 -> i si es menor que movies.length ->
//Para la siguiente vuelta ++
//const movie = movies[2] = "Bambi";
//console.log(movie) -> "Bambi"
//4ª VUELTA -> i = 3 -> i es menor que movies.length ->
//Para la siguiente vuelta ++
//const movie = movies[3] = "Matrix";
//console.log(movie) = "Matrix";
//5º VUELTA -> i = 4 -> i NO es menor que movies.length -> SE ROMPE EL BUCLE

for (let i = 0; i < 10; i++) {
	if (i === 5) {
		console.log("Hola, soy un cinco");
	} else {
		console.log(i);
	}
}
