/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

const empyDiv = document.createElement("div");
document.body.appendChild(empyDiv);

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

const divWithP = document.createElement("p");
const pElement = document.createElement("p");
pElement.textContent = "Contenido de la p";
divWithP.appendChild(pElement);
document.body.appendChild(divWithP);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
      loop con javascript. */
      const divWithMultipleP = document.createElement('div');
      for (let i = 0; i < 6; i++) {
        const pElement = document.createElement('p');
        pElement.textContent = "Párrafo ${i + 1}";
        divWithMultipleP.appendChild(pElement);
      }
      document.body.appendChild(dynamicP);

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/

      const dynamicP = document.createElement('p');
      dynamicP.textContent = 'Soy dinámico!';
      document.body.appendChild(dynamicP);


/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

    const h2Element = document.querySelector('.fn-insert-here');
    h2Element.textContent = 'Wubba Lubba dub dub';



/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
      const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */

      const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

      const ulElement = document.createElement("ul");

      apps.forEach(app => {
        const liElement = document.createElement('li');
        liElement.textContent = app;
        ulElement.appendChild(liElement);
      });
      documento.body.appendChild(ulElement);


/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

const elementosEliminar = document.querySelectorAll('.fn-remove-me');

      elementosEliminar.forEach(elemento => {
        elemento.remove();
      });


/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
      Recuerda que no solo puedes insertar elementos con .appendChild.*/





/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
.fn-insert-here */