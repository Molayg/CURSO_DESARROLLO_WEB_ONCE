// Funciones
//Las funciones son uno de los bloques de construcción fundamentales en JavaScript. 
//Una función en JavaScript es similar a un procedimiento 
//— un conjunto de instrucciones que realiza una tarea o calcula un valor, 
//pero para que un procedimiento califique como función, 
//debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia 
//entre la entrada y la salida. Para usar una función, debes definirla en 
//algún lugar del ámbito desde el que deseas llamarla.

//Declarando una función:
function sayHello (){    // Esta es la forma del código de las funciones
  console.log("Hola");
}
sayHello(); //Ejecutar la función
sayHello();
sayHello();

//Declarando una función con argumentos

function sayHelloWithName (name) {
  console.log("Hola " + name);
}
sayHelloWithName("Mónica");
sayHelloWithName("Gonzalo");


//

function sum(numA, numB) {
  const total = numA + numB;
  console.log(total)
}
 sum(8, 60);
 sum(250, 785);

 // Función: Calcular la edad de una persona 
 
 function calculateAge(name, bornYear, currentYear)
 {
     const age = currentYear - bornYear ;
     console.log(name + " tiene " + age + " años. ");

 }

 calculateAge("Mónica",1961,2023);
 calculateAge("Jimmy", 1997 , 2023);
 calculateAge("Jean Paúl", 1999, 2023);
 calculateAge("Manuel", 1965, 2023);
 
 // Por defecto se ha dado un valor a correntYear

 function calculateAge(name, bornYear, currentYear= 2023)
 {
     const age = currentYear - bornYear ;
     console.log(name + " tiene " + age + " años.");

 }

 calculateAge("Mónica",1961);
 calculateAge("Jimmy", 1997);
 calculateAge("Jean Paul", 1999);
 calculateAge("Manuel", 1965);

 //
 
 function elSecurity (name, age) {
  console.log(name + " intenta entrar en la discoteca.");
  if (age >= 18) {
    console.log(name + " pudo entrar y tomarse unas copitas.");
  
 } else {
  console.log(name + " se tuvo que ir a su casa hasta que crezca. ");
 }
 
}
elSecurity("Antonio", 33);
 elSecurity("Gonzalo", 17);




 





