
//const addamsFamily = [];
const characters = ["Miércoles", "Fétido", "Gómez", "Cosa", "Eso", "Morticia"];

for (let i = 0; i < characters.length; i++) {
  const character = characters[i];
  const newName = character + " Adams";
  addamsFamily.push(newName);
}
console.log(addamsFamily);

// Ejercicio notas de alumnos
    const result = [];
    const numbers = [2, 3, 4, 5, 10, 100, 50, 9, 21,];

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const newNumbers = numbers * 2;
        result.push(newNumbers);
}
// Vamos a calcular las notas medias de los alumnos:

const alumnos = [
{
    name: "Gonzalo",
    nota: 8
},
    
{
    name: "Dani",
    nota: 3
},

{
    name: "Alberto",
    nota: 2
},
{
    name: "Sabrina",
    nota: 7
},
];

let total = 0;
const numAlumnos = alumnos.length;

for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    total = total + alumno.nota;
}
console.log(total / numAlumnos);
