//Condicionales

/* if(//condición){//
}
//===-> ESTRICTAMENTE IGUAL QUE
//!=-> DESIGUAL QUE
}*/


let firstName == ("Paco";

if(firstName == "Peter"){
    console.log("Hola Peter");

} else {
    console.log("Oye, tu no eres Peter");
}

let age = 180;
if(age<18){
    console.log("Eres un adolescente");
} else if(age>= 18 && age <25){
    console.log("Ya eres mayor de edad");
 else if (age>= 25 && age<100){
    console.log("Ya eres adulto");
}else
    console.log("Enhora buena,eres inmortal");
}
 
let carnetDeConducir= true;
let edad = 17;

if (carnetDeConducir && edad >=18){
    console.log("Puedes conducir");
}else{
    console.log("No puedes conducir");
