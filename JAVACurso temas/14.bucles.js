// Los bucles permiten iterar elementos a través de arrayes
// Bubles básicos
// Cuando se escribe const x = 10 , esto no puede cambiar porque son datos simples
// En el ejemplo const name = "Alberto" -> no se puede cambiar porque son datos simples
// En el ejemplo const list = [1,2,3]-> En este caso si cambia porque se agrupan elementos o son array
// En el ejemplo const objeto= {name:"Don", job: "maestro"} los datos se modifican

const alumnos = ["Sergio","Javier","Isabel","David"];
// LONGITUD -> 4
//POSICIONES -> 0, 1, 2, 3

// CREAR UN BUCLE //
// 1ª primera configuaración ->iniciamos desde el principio

for (let i = 0; i < alumnos.length; i++) {
  console.log(i);

}
// Dentro del bloque se puede crear una constante
for (let i = 0; i < alumnos.length; i++) {
    const alumno = alumnos[i];
    console.log(alumno, i);

}
const alumnoslista = ["Sergio","Javier","Isabel","David"];
for (let i = 0; i < alumnoslista.length; i++){
    const alumno = alumnoslista[i];
    console.log(alumno);
}

    // RESULTADOS //
    //-> alumnos [0] ->Sergio
    //-> alumnos [1]-> Javier
    //-> alumnos [2]-> Isabel
    //-> alumnos [3]-> David

    const family = ["Gomez", "Morticia", "Cosa", "Miércoles", "Fetido"];
    for (let i = 0; i< family.length; i++){
        const member = family[i];
        console.log(member + " Adams");
    }

        




   
        
//
