//Desafío entregable N°1 del Curso JS de CoderHouse (Comisión 34010)
//Gestor del tiempo de examen
//Alumno: Guillermo Lopez

//Pasos del algoritmo:
//1_Entrada de la cantidad de páginas que se deben leer/estudiar
//2_Entrada de la cantidad de días que quedan para el examen
//3_Cálculo del rendimiento que se deberá adoptar para el examen
//4_Consejo luego de evaluar la situación




let paginasDelLibro = parseInt(prompt("Ingrese la cantidad de paginas que debe estudiar para el examen"))

while (isNaN(paginasDelLibro)||paginasDelLibro<0){ //Ciclo while para evitar entradas indeseadas
    paginasDelLibro=parseInt(prompt("Ingrese la cantidad de paginas que debe estudiar para el examen"));
}

console.log(paginasDelLibro);

let dias = parseInt(prompt("Ingrese la cantidad de días que quedan para el examen"))

while (isNaN(dias)||dias<0){
    dias=parseInt(prompt("Ingresó un valor incorrecto. Ingrese los días que faltan"));
}

console.log(dias);


function rendimientoDeLectura(paginasDelLibro, dias) {
    let rendimiento = (paginasDelLibro+5)/dias; //Sumo (arbitrariamente) 5 unidades a la cantidad de páginas para sobredimensionar el cálculo y hacerlo más realista
    alert(`Ud. deberá estudiar ${rendimiento} páginas por día para llegar con tiempo al examen`);
    switch(rendimiento>35){
        case true:
            alert("Debe hacer un esfuerzo desmedido para llegar con tiempo al examen. Que la fuerza le acompañe")
            break;
        case false:
            alert("Está con tiempo pero no se deje estar, mucha suerte")
            break;
    }
}
rendimientoDeLectura(paginasDelLibro, dias);