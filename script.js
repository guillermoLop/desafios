//TapeCollector v1.0
//Alumno: Guillermo Lopez

//Defino la clase Tape con la cual instanciaré los objetos

class Tape {
  constructor(title, label, year, imdb) {
    this.title = title;
    this.label = label;
    this.year = year;
    this.imdb = imdb;
  }
}

//Objetos que representan los artículos de mi colección. Contienen propiedades que no uso en esta entrega pero sí en las que sigan;
//La idea es manejar un volumen muchísimo mayor de objetos;

const tape001 = new Tape("Fuga de Absolon", "LK-TEL", 1994, "tt0110678");
const tape002 = new Tape("Vengador Implacable", "Radiocom", 1981, "tt0084600");
const tape003 = new Tape("El Templo de Fuego", "Transmundo", 1986, "tt0091055");
const tape004 = new Tape("Fuga del Bronx", "Transeuropa", 1983, "tt0089104");
const tape005 = new Tape("ROTOR", "Plus", 1988, "tt0098156");
const tape006 = new Tape(
  "El Mago del Imperio Perdido II",
  "Videomega",
  1989,
  "tt0090334"
);
const tape007 = new Tape("Striker", "Alfa", 1988, "tt0094060");
const tape008 = new Tape("Zona de Crimen", "Gativideo", 1988, "tt0094918");
const tape009 = new Tape("Cut & Run", "LAX", 1984, "tt0089338");
const tape010 = new Tape("Intento de Fuga", "Bell Video", 1987, "tt0098346");
const tape011 = new Tape("Demonios 2", "Gativideo", 1986, "tt0090930");

//Armo un array con los objetos definidos previamente;
//En principio solo manipulo este array, la idea es luego ir incorporando formas de agregar y quitar elementos

const tapes = [
  tape001,
  tape002,
  tape003,
  tape004,
  tape005,
  tape006,
  tape007,
  tape008,
  tape009,
  tape010,
  tape011,
];

//Inicio de la app. Bienvenida y breve explicación

alert("Bienvenido al TapeCollector");
alert(
  "Ud. podrá buscar los títulos de su colección ordenados por Videoeditora"
);

//Alerta con las posibles opciones

alert(
  "Actualmente su colección incluye títulos editados por las siguientes empresas:"
);
let labelCollection = tapes.map((each) => each.label);

//Este es un método que googlee para eliminar duplicados
//No entiendo bien cómo funciona pero hace exactamente lo que yo quería
let filteredLabel = [...new Set(labelCollection)];

alert(filteredLabel.join("\n"));

let labelsHeader = document.getElementById("labelsHeader");

labelsHeader.innerText = "Ud. posee títulos editados por las siguientes videoeditoras";

let labelsList = document.getElementById("labels");

filteredLabel.forEach((labels) => {
  let li = document.createElement("li");
  li.innerText = labels;
  labelsList.appendChild(li);
});

let label = prompt(
  "Ingrese nombre de la videoeditora cuyos títulos desea filtrar"
).toUpperCase();

const labelFilter = tapes.filter((tape) => tape.label.toUpperCase() == label);

if (labelFilter.length == 0) {
  alert(`Ud. no posee ningún título de la editora ${label}`);
  let titles = document.getElementById("titles");
  titles.innerText = `Ud. no posee ningún título de la editora ${label}`;
} else if (labelFilter.length == 1) {
  alert(`Ud. posee el siguiente título de la editora ${label}:`);
  let titles = document.getElementById("titles");
  titles.innerText = `Ud. posee el siguiente título de la editora ${label}:`;
  let labelTitle = labelFilter.map((tape) => tape.title);
  let titlesList = document.getElementById("titlesList");
  let li = document.createElement("li");
  li.innerText = labelTitle;
  titlesList.appendChild(li);
} else {
  alert(
    `Ud. posee los siguientes ${labelFilter.length} títulos de la editora ${label}:`
  );
  let titles = document.getElementById("titles");
  titles.innerText = `Ud. posee los siguientes ${labelFilter.length} títulos de la editora ${label}:`;
  let titleFilter = labelFilter.map((tape) => tape.title);
  let titlesList = document.getElementById("titlesList");

  titleFilter.forEach((titles) => {
    let li = document.createElement("li");
    li.innerText = titles;
    titlesList.appendChild(li);
  });
  alert(titleFilter.join("; "));
}
