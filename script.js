let modo = prompt(
  "Bienvenido al Calculador de Tonalidades. Por favor: indique si la tonalidad que busca es Mayor o Menor"
);

while (modo.toLowerCase() != "mayor" && modo.toLowerCase() != "menor") {
  modo = prompt(
    "El dato que ingresó es incorrecto; por favor ingrese 'Mayor' o 'Menor'"
  );
}

let alteracion = parseFloat(
  prompt(
    "Ahora ingrese '1' si la tonalidad no posee alteraciones '2' si posee sostenidos # o bien '3' si tiene bemoles b"
  )
);

while (alteracion != 1 && alteracion != 2 && alteracion != 3) {
  alteracion = prompt(
    "Valor incorrecto, por favor ingrese un número del 1 al 3"
  );
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
  }
  switch (cantDeAlteraciones) {
    case (cantDeAlteraciones = 1):
      let tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenido es Sol Mayor`
      );
    case (cantDeAlteraciones = 2):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Re Mayor`
      );
    case (cantDeAlteraciones = 3):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es La Mayor`
      );
    case (cantDeAlteraciones = 4):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Mi Mayor`
      );
    case (cantDeAlteraciones = 5):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Si Mayor`
      );
    case (cantDeAlteraciones = 6):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenido es Fa# Mayor`
      );
    case (cantDeAlteraciones = 7):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} sostenidos es Do# Mayor`
      );
    default:
      tonalidad = alert(
        `El número que ingresó no es válido; por favor, vuelva a empezar presionando F5`
      );
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
      let tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemol es Fa Mayor`
      );
    case (cantDeAlteraciones = 2):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Sib Mayor`
      );
    case (cantDeAlteraciones = 3):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Mib Mayor`
      );
    case (cantDeAlteraciones = 4):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Lab Mayor`
      );
    case (cantDeAlteraciones = 5):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Reb Mayor`
      );
    case (cantDeAlteraciones = 6):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Solb Mayor`
      );
    case (cantDeAlteraciones = 7):
      tonalidad = alert(
        `La tonalidad mayor que posee ${cantDeAlteraciones} bemoles es Dob Mayor`
      );
          default:
          tonalidad = alert(`El número que ingresó no es válido; por favor, vuelva a intentarlo presionando F5`)
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
      let tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenido es mi menor`
      );
    case (cantDeAlteraciones = 2):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es si menor`
      );
    case (cantDeAlteraciones = 3):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es fa# menor`
      );
    case (cantDeAlteraciones = 4):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es do# menor`
      );
    case (cantDeAlteraciones = 5):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es sol# menor`
      );
    case (cantDeAlteraciones = 6):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenido es re# menor`
      );
    case (cantDeAlteraciones = 7):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} sostenidos es la# menor`
      );
      default:
      tonalidad = alert(
        `El número que ingresó no es válido; por favor, vuelva a empezar presionando F5`
      );
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
      let tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemol es re menor`
      );
    case (cantDeAlteraciones = 2):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es sol menor`
      );
    case (cantDeAlteraciones = 3):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es do menor`
      );
    case (cantDeAlteraciones = 4):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es fa menor`
      );
    case (cantDeAlteraciones = 5):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es sib menor`
      );
    case (cantDeAlteraciones = 6):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es mib menor`
      );
    case (cantDeAlteraciones = 7):
      tonalidad = alert(
        `La tonalidad menor que posee ${cantDeAlteraciones} bemoles es lab menor`
      );
      default:
      tonalidad = alert(
        `El número que ingresó no es válido; por favor, vuelva a empezar presionando F5`
      );
  }
}

let despedida = alert(
  "Muchas gracias. Si desea volver a intentarlo presione F5"
);
