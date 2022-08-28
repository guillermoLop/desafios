//Calculador de Tonalidades Musicales
//Desafío opcional N°1 del Curso JS de CoderHouse (Comisión 34010)
//Alumno: Guillermo Lopez

//Mensaje de bienvenida + primera entrada al ciclo
let modo = prompt(
  "Bienvenido al Calculador de Tonalidades. Por favor: indique si la tonalidad que busca es Mayor o Menor"
);

//A lo largo del programa empleo whiles para generar un bucle que evite entradas indeseadas
while (modo.toLowerCase() != "mayor" && modo.toLowerCase() != "menor") {
  modo = prompt(
    "El dato que ingresó es incorrecto; por favor ingrese 'Mayor' o 'Menor'"
  );
  console.log("Error: valor ingresado inválido");
}

//Segunda instancia del ciclo
let alteracion = parseFloat(
  prompt(
    "Ahora ingrese '1' si la tonalidad no posee alteraciones '2' si posee sostenidos # o bien '3' si tiene bemoles b"
  )
);

while (alteracion != 1 && alteracion != 2 && alteracion != 3) {
  alteracion = prompt(
    "Valor incorrecto, por favor ingrese un número del 1 al 3"
  );
  console.log("Error: valor ingresado inválido");
}

if (modo == "mayor" && alteracion == 1) {
  let tonalidad = alert(
    `La tonalidad mayor que no posee ninguna alteración es Do Mayor`
  );
} else if (modo == "menor" && alteracion == 1) {
  let tonalidad = alert(
    `La tonalidad menor que no posee ninguna alteración es la menor`
  );
} else if (modo == "mayor" && alteracion == 2) {
  let cantDeAlteraciones = parseFloat(
    prompt(
      `Por último ingrese la cantidad de alteraciones de la tonalidad que busca (Valores entre 1 y 7)`
    )
  );
  while (cantDeAlteraciones < 1 || cantDeAlteraciones > 7) {
    cantDeAlteraciones = parseFloat(
      prompt("Valor incorrecto, por favor ingrese un número del 1 al 7")
    );
    console.log("Error: valor ingresado inválido");
  }
  switch (cantDeAlteraciones) {
    case (cantDeAlteraciones = 1):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenido es Sol Mayor`
      );
      break;
    case (cantDeAlteraciones = 2):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Re Mayor`
      );
      break;
    case (cantDeAlteraciones = 3):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es La Mayor`
      );
      break;
    case (cantDeAlteraciones = 4):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Mi Mayor`
      );
      break;
    case (cantDeAlteraciones = 5):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Si Mayor`
      );
      break;
    case (cantDeAlteraciones = 6):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenido es Fa# Mayor`
      );
      break;
    case (cantDeAlteraciones = 7):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Do# Mayor`
      );
      break;
    default:
      alert(
        `El número que ingresó no es válido; por favor, vuelva a empezar presionando F5`
      );
      console.log("Error: valor ingresado inválido");
      break;
  }
} else if (modo == "mayor" && alteracion == 3) {
  let cantDeAlteraciones = parseFloat(
    prompt(
      `Por último ingrese la cantidad de alteraciones de la tonalidad que busca (Valores entre 1 y 7)`
    )
  );
  while (cantDeAlteraciones < 1 || cantDeAlteraciones > 7) {
    cantDeAlteraciones = parseFloat(
      prompt("Valor incorrecto, por favor ingrese un número del 1 al 7")
    );
  }
  switch (cantDeAlteraciones) {
    case (cantDeAlteraciones = 1):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemol es Fa Mayor`
      );
      break;
    case (cantDeAlteraciones = 2):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Sib Mayor`
      );
      break;
    case (cantDeAlteraciones = 3):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Mib Mayor`
      );
      break;
    case (cantDeAlteraciones = 4):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Lab Mayor`
      );
      break;
    case (cantDeAlteraciones = 5):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Reb Mayor`
      );
      break;
    case (cantDeAlteraciones = 6):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Solb Mayor`
      );
      break;
    case (cantDeAlteraciones = 7):
      alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Dob Mayor`
      );
      break;
    default:
      alert(
        `El número que ingresó no es válido; por favor, vuelva a intentarlo presionando F5`
      );
      console.log("Error: valor ingresado inválido");
      break;
  }
} else if (modo == "menor" && alteracion == 2) {
  let cantDeAlteraciones = parseFloat(
    prompt(
      `Por último ingrese la cantidad de alteraciones de la tonalidad que busca (Valores entre 1 y 7)`
    )
  );
  while (cantDeAlteraciones < 1 || cantDeAlteraciones > 7) {
    cantDeAlteraciones = parseFloat(
      prompt("Valor incorrecto, por favor ingrese un número del 1 al 7")
    );
  }
  switch (cantDeAlteraciones) {
    case (cantDeAlteraciones = 1):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenido es mi menor`
      );
      break;
    case (cantDeAlteraciones = 2):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es si menor`
      );
      break;
    case (cantDeAlteraciones = 3):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es fa# menor`
      );
      break;
    case (cantDeAlteraciones = 4):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es do# menor`
      );
      break;
    case (cantDeAlteraciones = 5):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es sol# menor`
      );
      break;
    case (cantDeAlteraciones = 6):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenido es re# menor`
      );
      break;
    case (cantDeAlteraciones = 7):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es la# menor`
      );
      break;
    default:
      alert(
        `El número que ingresó no es válido; por favor, vuelva a empezar presionando F5`
      );
      console.log("Error: valor ingresado inválido");
      break;
  }
} else if (modo == "menor" && alteracion == 3) {
  let cantDeAlteraciones = parseFloat(
    prompt(
      `Por último ingrese la cantidad de alteraciones de la tonalidad que busca (Valores entre 1 y 7)`
    )
  );
  while (cantDeAlteraciones < 1 || cantDeAlteraciones > 7) {
    cantDeAlteraciones = parseFloat(
      prompt("Valor incorrecto, por favor ingrese un número del 1 al 7")
    );
  }
  switch (cantDeAlteraciones) {
    case (cantDeAlteraciones = 1):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemol es re menor`
      );
      break;
    case (cantDeAlteraciones = 2):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es sol menor`
      );
      break;
    case (cantDeAlteraciones = 3):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es do menor`
      );
      break;
    case (cantDeAlteraciones = 4):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es fa menor`
      );
      break;
    case (cantDeAlteraciones = 5):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es sib menor`
      );
      break;
    case (cantDeAlteraciones = 6):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es mib menor`
      );
      break;
    case (cantDeAlteraciones = 7):
      alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es lab menor`
      );
      break;
    default:
      tonalidad = alert(
        `El número que ingresó no es válido; por favor, vuelva a empezar presionando F5`
      );
      console.log("Error: valor ingresado inválido");
      break;
  }
}

//Mensaje despedida
let despedida = alert(
  "Muchas gracias. Si desea volver a intentarlo presione F5"
);
