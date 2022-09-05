//Desafío entregable N°2 del Curso JS de CoderHouse (Comisión 34010)
//Recorrido de tonalidades musicales
//Alumno: Guillermo Lopez

//Defino la clase Scales como molde para mi objeto escalas

class Scale {
    constructor(key, accidentalsQty, major, sharp) {
      this.key = key;   //tónica
      this.accidentalsQty = accidentalsQty; //cantidad de alteraciones
      this.major = major;   //modo (sólo puede tomar 2 valores de modo que uso booleano como tipo de dato de esta propiedad)
      this.sharp = sharp;   //tipo de alteración (sólo puede tomar 3 valores de modo que fuerzo usar booleano dejando las únicas 2 excepciones como undefined en esta propiedad)
    }
  }
  
  //ESCALAS MAYORES
  
  //Natural
  const major0 = new Scale("DoM", 0, true);
  
  //Sostenidos #
  const major1 = new Scale("SolM", 1, true, true);
  const major2 = new Scale("ReM", 2, true, true);
  const major4 = new Scale("MiM", 4, true, true);
  const major3 = new Scale("LaM", 3, true, true);
  const major5 = new Scale("SiM", 5, true, true);
  const major6 = new Scale("Fa#M", 6, true, true);
  const major7 = new Scale("Do#M", 7, true, true);
  
  //Bemoles b
  
  const major8 = new Scale("FaM", 1, true, false);
  const major9 = new Scale("SibM", 2, true, false);
  const major10 = new Scale("MibM", 3, true, false);
  const major11 = new Scale("LabM", 4, true, false);
  const major12 = new Scale("RebM", 5, true, false);
  const major13 = new Scale("SolbM", 6, true, false);
  const major14 = new Scale("DobM", 7, true, false);
  
  //ESCALAS MENORES
  
  //Natural
  const minor0 = new Scale("lam", 0, false);
  
  //Sostenidos #
  const minor1 = new Scale("mim", 1, false, true);
  const minor2 = new Scale("sim", 2, false, true);
  const minor3 = new Scale("fa#m", 3, false, true);
  const minor4 = new Scale("do#m", 4, false, true);
  const minor5 = new Scale("sol#m", 5, false, true);
  const minor6 = new Scale("re#m", 6, false, true);
  const minor7 = new Scale("la#m", 7, false, true);
  
  //Bemoles b
  
  const minor8 = new Scale("rem", 1, false, false);
  const minor9 = new Scale("solm", 2, false, false);
  const minor10 = new Scale("dom", 3, false, false);
  const minor11 = new Scale("fam", 4, false, false);
  const minor12 = new Scale("sibm", 5, false, false);
  const minor13 = new Scale("mibm", 6, false, false);
  const minor14 = new Scale("labm", 7, false, false);
  
  //Lista por separado
  
  const majors = [
    major0,
    major1,
    major2,
    major3,
    major4,
    major5,
    major6,
    major7,
    major8,
    major9,
    major10,
    major11,
    major12,
    major13,
    major14,
  ];
  
  const minors = [
    minor0,
    minor1,
    minor2,
    minor3,
    minor4,
    minor5,
    minor6,
    minor7,
    minor8,
    minor9,
    minor10,
    minor11,
    minor12,
    minor13,
    minor14,
  ];
  
  //Interacción con el usuario
  
  let mode = prompt(
    "Bienvenido al Memorizador de Tonalidades\nPor favor: indique si desea recorrer el círculo de quintas del modo Mayor o Menor")
  ;
  
  while (mode.toLowerCase() != "mayor" && mode.toLowerCase() != "menor") {
    mode = prompt(
      "El dato que ingresó es incorrecto; por favor ingrese 'Mayor' o 'Menor'"
    );
    console.log("Error: valor ingresado inválido");
  }
  
  if (mode.toLowerCase() == "mayor") {
    for (const scale of majors) {
      alert(scale["key"]);
    }
  } else if (mode.toLowerCase() == "menor") {
    for (const scale of minors) {
      alert(scale["key"]);
    }
  }
  
  alert("Muchas gracias. Si desea volver a intentarlo presione F5");
  