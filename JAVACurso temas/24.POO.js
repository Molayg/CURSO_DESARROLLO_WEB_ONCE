// Programación orientado a Objetos
const objeto = {
    name : "Objeto",
    price : 5,
    new: true,
    action: () => {
        console.log("Hola soy la acción")
    }
}
objeto.action()

for(const clave in objeto){
    console.log(objeto[clave])   // NOTA : Se puede acceder a los objetos de dos maneras: 
    // con . o con paréntesis ( está descripcion se encuentra en pdf bucles)

}

// Funciones constructoras
function Car(marca, color, puertas, modelo){
    this.marca = marca;
    this.color = color;
    this.puertas = puertas;
    this.modelo = modelo;
    this.ruedas = 4          // No se coloca ningún signo luego del cuatro, porque se determina
    this.arrancar = () => console.log(this.modelo  +                // que tiene exactamente 4 ruedas
        " ha arrancado");


    this.frenar = () => console.log(this.modelo  +  " ha frenado")
}
const seatpanda = new Car("Seat", "morado", 3, "Panda")
console.log(seatpanda)
seatpanda.arrancar()
    const camaro = new Car("Chevrolet", "amarillo", 3, "Camaro");
    camaro.arrancar()
        console.log(camaro)
  


