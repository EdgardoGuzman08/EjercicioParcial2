let datoNuevo = document.getElementById('datoNuevo');
// los arreglos requeridos para el codigo
let alumno=[{
    codigo:"1",
    nombre:"Pedro",
    apellido:"Perez"
    },
    {
    codigo:"2",
    nombre:"Juan",
    apellido:"Paz"
    }
];

let maestro=[
    {
    codigo:"1",
    nombre:"JDamian",
    apellido:"Sanchez"
    }
    ,
    {
        codigo:"2",
        nombre:"Raul",
        apellido:"Castro"
    }
];

clase=["Matematicas","Ciencias","Artistica","Sociales"];

let notas=[
    {
        alumno:"",
        maestro:"",
        clase:"",
        Nota1:0,
        Nota2:0,
        Nota3:0,
        Promedio:0,
        Observacion:"NN"
    }

]
//fin de arreglos 
let cClases=document.getElementById('cuadroClases');

//Radio para materias
for (let i=0; i<clase.length; i++){

    let elemento = document.createElement('input');
    let etiqueta = document.createElement('label');
    let selecciona=document.createElement('option');
    let textoEtiqueta = document.createTextNode(clase[i]);
    etiqueta.appendChild(textoEtiqueta);
    elemento.type="radio";
    elemento.id=`${String(clase[i])}`;
    elemento.name="Clase";
    elemento.value=`${String(clase[i])}`;
    cClases.append(elemento, etiqueta);

}

//Buscar esa materia por su valor
function Buscar(){
    let Bradio = document.getElementsByName('Clase');
    console.log(Bradio);
    for(let i=0; i< Bradio.length; i++){
        if(Bradio[i].checked){
            console.log(Bradio[i].value);
        }
    }
}

//agregar clase a nuestras clases o arrelgo de materias
function agregarClase() {
    let fldsmdfr = document.getElementById('clasenueva').value;
    if (clase.includes(fldsmdfr)) {
        alert('La clase ya existe');
        return;
    }
    clase.push(fldsmdfr);
    let nuevoRadio = document.createElement('input');
    let nuevaEtiqueta = document.createElement('label');
    let nuevoTextoEtiqueta = document.createTextNode(fldsmdfr);
    nuevaEtiqueta.appendChild(nuevoTextoEtiqueta);
    nuevoRadio.type="radio";
    nuevoRadio.id=`${String(fldsmdfr)}`;
    nuevoRadio.name="Clase";
    nuevoRadio.value=`${String(fldsmdfr)}`;
    cClases.append(nuevoRadio, nuevaEtiqueta);
    document.getElementById("clasenueva").value = "";
}
//fin de las funciones de materias 

/* 
Comienzo de la tarea 
Seminario de Software
Inciso 1 Guardar y Buscar maestro y alumno
*/

//guardar Alumno 
function guardarAlumno() {
    let codigo = document.getElementById('codigoAlumno').value;
    let nombre = document.getElementById('nombreAlumno').value;
    let apellido = document.getElementById('apellidoAlumno').value;
    
    let nuevoAlumno = {
        codigo: codigo,
        nombre: nombre,
        apellido: apellido
    };
    
    // verificar que el alumno no exista ya en el arreglo
    let existeAlumno = false;
    for (let i = 0; i < alumno.length; i++) {
        if (alumno[i].codigo === codigo) {
            existeAlumno = true;
            break;
        }
    }
    
    if (existeAlumno) {
        alert('El alumno ya existe');
    } else {
        alumno.push(nuevoAlumno);
        alert('Alumno guardado correctamente');
        console.log(alumno);
    }
}//fin guardar alumno

//Buscar Alumno
function buscarAlumno() {
    //busqueda realizada por el id
    let codigo = document.getElementById("codigoAlumno").value;
    for (let i = 0; i < alumno.length; i++) {
        if (alumno[i].codigo === codigo) {
            //si existe hace la busqueda y pone en los input los datos
            document.getElementById("nombreAlumno").value = alumno[i].nombre;
            document.getElementById("apellidoAlumno").value = alumno[i].apellido;
            return;
        }
    }
    //salta esta linea si el alumno no existe y le concatenamos el codigo que se envia
    alert("El alumno con codigo " + codigo + " no existe.");
    console.log(alumno);
}//fin buscar alumno

//guardar Maestro
function guardarMaestro() {
    let codigo = document.getElementById('codigoMaestro').value;
    let nombre = document.getElementById('nombreMaestro').value;
    let apellido = document.getElementById('apellidoMaestro').value;
    
    let nuevoMaestro = {
        codigo: codigo,
        nombre: nombre,
        apellido: apellido
    };
    
    // verificar que el maestro no exista ya en el arreglo
    let existeMaestro = false;
    for (let i = 0; i < maestro.length; i++) {
        if (maestro[i].codigo === codigo) {
            existeMaestro = true;
            break;
        }
    }
    
    if (existeMaestro) {
        alert('El maestro ya existe');
    } else {
        maestro.push(nuevoMaestro);
        alert('Maestro guardado correctamente');
        console.log(maestro);
    }
}//fin guardar maestro

// buscar Maestro
function buscarMaestro() {
    //la busqueda se hace en base al id 
    let codigo = document.getElementById("codigoMaestro").value;
    for (let i = 0; i < maestro.length; i++) {
        if (maestro[i].codigo === codigo) {
            // si existe pone los datos en el campo requerido
            document.getElementById("nombreMaestro").value = maestro[i].nombre;
            document.getElementById("apellidoMaestro").value = maestro[i].apellido;
            return;
        }
    }
    // si no existe salta este alert
    alert("El maestro con código " + codigo + " no existe.");
    console.log(maestro);
}// fin buscar maestro

/* 
Ejercicio #2 
Guardar notas en el arreglo notas
*/

//funcion que nos ayuda a calcular el promedio y solo mandamos a llamarla
// la observacion es en base a aprobado o reprobado
function calcularPromedio(nota1, nota2, nota3) {
    const promedio = (nota1 + nota2 + nota3) / 3;
    let observacion = "Reprobado";
    if (promedio >= 70) {
        observacion = "Aprobado";
    }
    return { promedio, observacion };
}


//guardar notas en el arreglo notas
function guardarNotas() {
    // Recuperar datos del formulario
    // es todo lo que le pedimos al usuario que debe llenar para guardar
    // la nota sino saltaria un error
    const nombreAlumno = document.getElementById("nombreAlumno").value;
    const apellidoAlumno = document.getElementById("apellidoAlumno").value;
    const nombreMaestro = document.getElementById("nombreMaestro").value;
    const apellidoMaestro = document.getElementById("apellidoMaestro").value;
    const Bradio = document.getElementsByName('Clase');
    let claseSeleccionada = '';
    for(let i=0; i< Bradio.length; i++){
        if(Bradio[i].checked){
            claseSeleccionada = Bradio[i].value;
        }
    }
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcular promedio y observación
    // hicimos una funcion de calcularPromedio para solo mandar a llamar 
    //cuando se necesite 
    const { promedio, observacion } = calcularPromedio(nota1, nota2, nota3);

    // Agregar nota al arreglo de notas
    notas.push({
        alumno: nombreAlumno + ' ' + apellidoAlumno,
        maestro: nombreMaestro + ' ' + apellidoMaestro,
        clase: claseSeleccionada,
        Nota1: nota1,
        Nota2: nota2,
        Nota3: nota3,
        Promedio: promedio,
        Observacion: observacion
    });

    // Limpiar campos del formulario que se requiren para guardar la nota
    document.getElementById("codigoAlumno").value = "";
    document.getElementById("codigoMaestro").value = "";
    document.getElementById("nombreAlumno").value = "";
    document.getElementById("nombreMaestro").value = "";
    document.getElementById("apellidoAlumno").value = "";
    document.getElementById("apellidoMaestro").value = "";
    // Desmarcar radios
    let Bradios = document.getElementsByName('Clase');
    for(let i=0; i< Bradios.length; i++){
        Bradios[i].checked = false;
    }
    document.getElementById('clasenueva').value="";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    //mostramos todo en la consola
    console.log(notas);
    
    /* Aqui construimos desde el js las filas que nosotros queremos 
    iterar con nuestro html en otras palabras nuestra tabla general de notas
    tambien las podemos visualizar desde consola pero para una mejor
    visualizacion movemos la informacion a una tabla en especifico */
    const fila = document.createElement("tr");
    fila.innerHTML = `
    <td>${nombreAlumno} ${apellidoAlumno}</td>
    <td>${nombreMaestro} ${apellidoMaestro}</td>
    <td>${claseSeleccionada}</td>
    <td>${nota1}</td>
    <td>${nota2}</td>
    <td>${nota3}</td>
    <td>${promedio}</td>
    <td>${observacion}</td>
    `;

    // Agregar fila de js a la tabla en el html
    const tabla = document.querySelector("table tbody");
    tabla.appendChild(fila);

}//fin guardar notas 


/*
    Ejercicio 3 4 y 5
realizar reportes por cada una de las acciones
1. notas por clase
2- notas por alumno
3. notas por maestro
*/

//notas por clases
function generarReporteNotasPorClase() {
        // obtener la clase seleccionada por el usuario
        let claseSeleccionada = document.querySelector('input[name="Clase"]:checked');
        if (!claseSeleccionada) {
        alert('Debe seleccionar una clase');
        return;
        }
        claseSeleccionada = claseSeleccionada.value;
    
        // buscar los registros de notas correspondientes a la clase seleccionada
        let registros = notas.filter(nota => nota.clase === claseSeleccionada);
    
        // obtener una referencia a la tabla donde se mostrarán los datos
        let tabla = document.querySelector('.reportes-table tbody');
    
        // limpiar la tabla antes de agregar nuevos datos
        tabla.innerHTML = '';
    
        // iterar sobre los registros de notas y agregarlos a la tabla
        for (let registro of registros) {
        let fila = document.createElement('tr');
        let celdaAlumno = document.createElement('td');
        let celdaMaestro = document.createElement('td');
        let celdaClase = document.createElement('td');
        let celdaNota1 = document.createElement('td');
        let celdaNota2 = document.createElement('td');
        let celdaNota3 = document.createElement('td');
        let celdaPromedio = document.createElement('td');
        let celdaObservacion = document.createElement('td');
    
        celdaAlumno.textContent = registro.alumno;
        celdaMaestro.textContent = registro.maestro;
        celdaClase.textContent = registro.clase;
        celdaNota1.textContent = registro.Nota1;
        celdaNota2.textContent = registro.Nota2;
        celdaNota3.textContent = registro.Nota3;
    
        let promedio = (registro.Nota1 + registro.Nota2 + registro.Nota3) / 3;
        celdaPromedio.textContent = promedio.toFixed(2);
    
        let observacion = promedio >= 70 ? 'Aprobado' : 'Reprobado';
        celdaObservacion.textContent = observacion;
    
        fila.appendChild(celdaAlumno);
        fila.appendChild(celdaMaestro);
        fila.appendChild(celdaClase);
        fila.appendChild(celdaNota1);
        fila.appendChild(celdaNota2);
        fila.appendChild(celdaNota3);
        fila.appendChild(celdaPromedio);
        fila.appendChild(celdaObservacion);
    
        tabla.appendChild(fila);
        }
        // Desmarcar el radio a la hora de darle guardar
        let Bradios = document.getElementsByName('Clase');
        for(let i=0; i< Bradios.length; i++){
            Bradios[i].checked = false;
        }
}

//notas por alumno
function generarReporteNotasPorAlumno() {
    // Obtener el nombre completo del alumno buscado 
    let nombreAlumno = document.getElementById('nombreAlumno').value + ' ' + document.getElementById('apellidoAlumno').value;

    // Buscar todas las notas con el nombre del alumno
    let notasAlumno = notas.filter(notas => notas.alumno === nombreAlumno);

    // Si no hay notas para ese alumno, mostrar mensaje de error 
    if (notasAlumno.length === 0) {
        alert('No se encontraron notas para ese alumno.');
        return;
    }

    // obtenemos donde queremos que esa informacion se muestre
    let tbody = document.getElementById('reportesTable').getElementsByTagName('tbody')[0];

    // Crear un string HTML para cada fila de la tabla y agregarlo al tbody
    let html = '';
    for (let i = 0; i < notasAlumno.length; i++) {
        let observacion = notasAlumno[i].Promedio >= 70 ? 'Aprobado' : 'Reprobado';
        html += `<tr>
                    <td>${notasAlumno[i].alumno}</td>
                    <td>${notasAlumno[i].maestro}</td>
                    <td>${notasAlumno[i].clase}</td>
                    <td>${notasAlumno[i].Nota1}</td>
                    <td>${notasAlumno[i].Nota2}</td>
                    <td>${notasAlumno[i].Nota3}</td>
                    <td>${notasAlumno[i].Promedio}</td>
                    <td>${observacion}</td>
                </tr>`;
    }
    //limpiamos los campos del alumno
    document.getElementById("codigoAlumno").value = "";
    document.getElementById("nombreAlumno").value = "";
    document.getElementById("apellidoAlumno").value = "";
    //integramos los resultados a nuestro html
    tbody.innerHTML = html;
}


//notas por maestro
function generarReporteNotasPorMaestro() {
    // Obtener el nombre completo del maestro buscado
    let nombreMaestro = document.getElementById('nombreMaestro').value + ' ' + document.getElementById('apellidoMaestro').value;

    // aqui buscamos las notas que el maestro ha hecho
    let notasMaestro = notas.filter(notas => notas.maestro === nombreMaestro);

    // Si no hay notas de ese maestro sale el alert
    if (notasMaestro.length === 0) {
        alert('No se encontraron notas para ese alumno.');
        return;
    }

    // obtenemos la tabla de referencia en nuestro html
    let tbody = document.getElementById('reportesTable').getElementsByTagName('tbody')[0];

    // Crear un string HTML para cada fila de la tabla y agregarlo al tbody
    let html = '';
    for (let i = 0; i < notasMaestro.length; i++) {
        let observacion = notasMaestro[i].Promedio < 70 ? 'Reprobado' : 'Aprobado';
        html += `<tr>
                    <td></td>
                    <td>${notasMaestro[i].maestro}</td>
                    <td>${notasMaestro[i].clase}</td>
                    <td>${notasMaestro[i].Nota1}</td>
                    <td>${notasMaestro[i].Nota2}</td>
                    <td>${notasMaestro[i].Nota3}</td>
                    <td>${notasMaestro[i].Promedio}</td>
                    <td>${observacion}</td>
                </tr>`;
    }
    //limpiamos los campos de maestros
    document.getElementById("codigoMaestro").value = "";
    document.getElementById("nombreMaestro").value = "";
    document.getElementById("apellidoMaestro").value = "";
    //se integran los datos al html
    tbody.innerHTML = html;
}

//funcion usada para limpiar los campos
function limpiarCampos(){
    document.getElementById("codigoAlumno").value = "";
    document.getElementById("codigoMaestro").value = "";
    document.getElementById("nombreAlumno").value = "";
    document.getElementById("nombreMaestro").value = "";
    document.getElementById("apellidoAlumno").value = "";
    document.getElementById("apellidoMaestro").value = "";
}