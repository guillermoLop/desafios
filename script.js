//TapeCollector v1.0
//Alumno: Guillermo Lopez

//Capturando elementos del HTML

let addTitle = document.getElementById("title");
let addLabel = document.getElementById("label");
let addYear = document.getElementById("year");
let addImdb = document.getElementById("imdb");
let addSbmt = document.getElementById("addSbmt");
let newTape = document.getElementById("newTape");
let labelsHeader = document.getElementById("labelsHeader");
let refresh = document.getElementById("refresh");
let titlesList = document.getElementById("titlesList");
let labelsList = document.getElementById("labels");
let removeBtn = document.getElementById("remove");
let imdbRmv = document.getElementById("imdbRmv");

//Boton para agregar títulos

const saveMovie = (key, value) => {
  localStorage.setItem(key, value);
};

//function nullFilm() {
//  newTape.reset();
//  console.log("El título ya se encuentra ingresado")
//}

function funcTape(e) {
  if (
    title.value == "" ||
    label.value == "" ||
    year.value == "" ||
    imdb.value == ""
  ) {
    e.preventDefault();
    newTape.reset();
    console.log("ERROR: Llenar todos los campos");
  } else {
    e.preventDefault();
    let lastTape = new Tape(title.value, label.value, year.value, imdb.value);
    localStorage.getItem(imdb.value)
      ? console.log("El título ya se encuentra ingresado")
      : saveMovie(imdb.value, JSON.stringify(lastTape));
    newTape.reset();
  }
}
newTape.addEventListener("submit", funcTape);

//Definiendo clase Tape

class Tape {
  constructor(title, label, year, imdb) {
    this.title = title;
    this.label = label;
    this.year = year;
    this.imdb = imdb;
  }
}

//Hard-code

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

let tapes = [
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

let labelCollection = tapes.map((each) => each.label);
let filteredLabel = [...new Set(labelCollection)];

labelsHeader.innerText =
  "Ud. posee títulos editados por las siguientes videoeditoras";

//Boton refresh: actualiza el array hard-codeado con los objetos que encuentre en LS

refresh.onclick = () => {
  labelsList.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    tapes.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  labelCollection = tapes.map((each) => each.label);
  filteredLabel = [...new Set(labelCollection)];
  filteredLabel.forEach((labels) => {
    let li = document.createElement("li");
    li.innerText = labels;
    labelsList.appendChild(li);
    const btn = document.createElement("button");
    btn.innerHTML = "Ver títulos";
    labelsList.appendChild(btn);
    const labelFilter = tapes.filter((tape) => tape.label == labels);
    let titleFilter = labelFilter.map((tape) => tape.title);
    let liBtn = document.createElement("li");
    liBtn.innerHTML = titleFilter.join(", ");
    btn.onclick = () => {
      titlesList.appendChild(liBtn);
    };
  });
};

//Boton clear de reset de titulos

let clearBtn = document.getElementById("clear");
clearBtn.onclick = () => {
  titlesList.innerHTML = "";
};

removeBtn.onclick = () => {
  console.log(imdbRmv.value);
  localStorage.getItem(imdbRmv.value)
    ? localStorage.removeItem(imdbRmv.value)
    : console.log("El título no se encuentra ingresado");
  imdbRmv.value = "";
};
