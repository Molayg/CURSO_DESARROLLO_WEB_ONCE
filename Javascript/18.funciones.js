// Funciones
//Las funciones son uno de los bloques de construcción fundamentales en JavaScript. 
//Una función en JavaScript es similar a un procedimiento 
//— un conjunto de instrucciones que realiza una tarea o calcula un valor, 
//pero para que un procedimiento califique como función, 
//debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia 
//entre la entrada y la salida. Para usar una función, debes definirla en 
//algún lugar del ámbito desde el que deseas llamarla.

//Funciones
//Declarando una función:
function sayHello() {
	console.log("Hola!");
}
//Ejecutar la función
sayHello();

//Declarando una función con argumentos
function sayHelloWithName(name) {
	console.log("Hola " + name);
}

sayHelloWithName("Gonzalo");
sayHelloWithName("Javier");

//

function sum(numA, numB) {
	const total = numA + numB;
	console.log(total);
}

sum(8, 60);
sum(250, 785);

//
//Le hemos dado un valor por defecto a currentYear
function calculateAge(name, bornYear, currentYear = 2023) {
	const age = currentYear - bornYear;
	console.log(name + " tiene " + age + " años.");
}

calculateAge("Antonio", 1990);
calculateAge("Gonzalo", 1993);
calculateAge("Edith", 1972);
calculateAge("Gandhi", 1869, 1902);

//

function elSegurata(name, age) {
	console.log(name + " intenta entrar en la discoteca.");
	if (age >= 18) {
		console.log(name + " pudo entrar y tomarse unas copitas.");
	} else {
		console.log(name + " se tuvo que ir a su casa hasta que crezca.");
	}
}

elSegurata("Antonio", 33);
elSegurata("Gonzalo", 17);
