
import "./style.css";
const COLOR_PALETTE = {
  "Cerúleo brillante"	: "	#1dacd6",
  "Verde brillante"	:	"#66ff00",
  "Lavanda brillante.":	"#bf94e4",
  "lila brillante":	"#d891ef",
  "Granate brillante": "#c32148",
  "Azul marino brillante":	"#1974d2",
  "turquesa brillante": "#08e8de",
  "Ube brillante":	"#d19fe8",
  "rosa brillante":	"#ff55a3",

};
Object.keys(COLOR_PALETTE).forEach((color) => {
const option = document.createElement("option");
option.value = color;
option.innerText = COLOR_PALETTE[color];
});
const colorPickerSelect = document.querySelector("#color-picker");
Object.keys(COLOR_PALETTE).forEach((color) => {
const option = document.createElement("option");
option.value = color;
option.innerText = COLOR_PALETTE[color];
colorPickerSelect.append(option);
})
const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
  colorPickerSelect.append(option);
  })
  }
  addOptionsToColorPicker()

  const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    //Almacenamos el código de color
    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    });
    };
    addOptionsToColorPicker();
    addEventListenerToColorPicker();

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";

  


