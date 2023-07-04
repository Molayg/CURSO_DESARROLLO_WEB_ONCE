
// Arrays
// Los array son El array, dentro de la programación, se refiere a un tipo de dato estructurado que almacena datos, del mismo tipo y relacionados. Los elementos que conforman ...

let alimentos = ["Pan","Lechuga","Cerveza", "Galletas" , "Fuet"];

// Longitud

console.log(alimentos.length); //  GO TO HELL // con la palabra lenght se pueden contar los objetos o longitud del contenido de la caja

//Posiciones-> Estan basadas en 0 zer based , siendo esta la manera de conocer el lugar de cada elemento. Hay dos formas de posición :
// la máquina accede desde 0 ( en este ejemplo la lechuga tiene posición 1)
// el ser humano accede desde 1. ( En este ejemplo la lechuga tien posicón 2)

//Cómo acceder a cada uno de los elementos de un array
console.log(alimentos[2]);

// Array de objetos. El método para acceder a las posiciones de un array son los corchetes

let movies = 
[
    {
        title: "Barbie",
        year: 2023,
       reparto: [
    {
        name: "Margot Robbie",
        character: "Barbie",
        otherCharacters: [
            "Harley Quinn",
            "La mujer del Lobo de WallStreet",
            "La mujer Roman Polansky",

        ],

    },
    {
        name: "Ryan Gosling",
        character:"Ken",

    },

],
       
},
    {
        title: "Spider-Man: Across the Spiderverse",
        year: 2023,

    },
];
console.log(movies[0].reparto[0].otherCharacters[0]);

