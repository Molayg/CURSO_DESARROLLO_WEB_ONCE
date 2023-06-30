setTimeout (() => { // en javascrip los parentesis juntos significa incógnita
    console.log("Hola");
}, 3000);

setInterval(() => {
    console.log("Segundo")
}, 1000);


setInterval(() => {
    const date = new Date ();
    const clock = date.getHours() + ":" + date.getMinutes() +
    ":" + date.getSeconds()
    console.log(clock)
}, 1000);

