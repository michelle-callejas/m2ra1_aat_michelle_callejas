let nombre = " "; 
let salario=" ";
let fecha=" ";
let puesto=" ";
let seleccionado=" ";
let ingreso=" ";


function agregarDatos(event) {
    event.preventDefault();
    let puesto=document.getElementById('puestoEmpleado')
    let nombre = document.getElementById('txtNombre').value;
    let salario=parseFloat(document.getElementById('nbSalario').value);
   
    let seleccionado = puesto.options[puesto.selectedIndex].text;
    let tablaDatos = document.getElementById('datosEmpleados');

    let newRow = tablaDatos.insertRow();
    let fecha = document.getElementById('fechaIngreso');
    let ingreso = fecha.value;
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = nombre;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = ingreso;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = seleccionado;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = salario;
}

function eliminarPrimerDato(event){
    event.preventDefault();
    document.getElementById("datosEmpleados").deleteRow(1);

}

function eliminarUltimoDato(event){
    event.preventDefault();
    document.getElementById("datosEmpleados").deleteRow(-1);

}
