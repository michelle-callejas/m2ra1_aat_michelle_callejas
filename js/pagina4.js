function calcularIndemnizacion(event){
    event.preventDefault();

    //ingresos
    let sbase=parseFloat(document.getElementById('sueldobase').value);
    let aTrabajados=parseFloat(document.getElementById('cantidadAn').value);
    let sPendiente=parseFloat(document.getElementById('salarioPendiente').value);
    let deudasCobros=parseFloat(document.getElementById('deudas').value);
    let meses= parseFloat(document.getElementById('cantidadMe').value);

   //prestaciones
    let b14= sbase/12*meses;
    let aguinaldoP= sbase/12*meses;

    //total indemnizacion
    let indemnizacion=((sbase*aTrabajados)+(b14+aguinaldoP+sPendiente))-deudasCobros;
    document.getElementById('bono14').value=b14.toFixed(2);
    document.getElementById('aguinaldo').value=aguinaldoP.toFixed(2);
    document.getElementById('totalIndemnizacion').value="Q. "+indemnizacion.toFixed(2);

    if (document.getElementById('sueldobase') == null) {
        alert("Complete todos los campos requeridos");
    }
    else if (document.getElementById('cantidadAn') == null) {
        alert("Complete todos los campos requeridos");
    }
    else if (document.getElementById('cantidadMe') == null) {
        alert("Complete todos los campos requeridos");
    }

    else if (document.getElementById('salarioPendiente') == null) {
        alert("Complete todos los campos requeridos");
    }

    else if (document.getElementById('deudas') == null) {
        alert("Complete todos los campos requeridos");
    
    }
}
