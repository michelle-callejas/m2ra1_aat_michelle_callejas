function sueldol(event) {
    event.preventDefault();

    //ingresos
    let sbase = parseFloat(document.getElementById('sueldo').value);
    let bonificacion = 250;
    let comision = parseFloat(document.getElementById('comisiones').value);
    let totalganancias = sbase + bonificacion + comision;
    document.getElementById('totalIngresos').value = "Q" + totalganancias.toFixed(2);

    //egresos
    let ahorros = parseFloat(document.getElementById('ahorro').value);
    let igssCalculo = sbase * 0.0483;
    document.getElementById('igss').value = igssCalculo.toFixed(2);
    let descuentos = parseFloat(document.getElementById('otrosDescuentos').value);
    let totalPerdidas = ahorros + igssCalculo + descuentos;
    document.getElementById('totalEgresos').value = "Q" + totalPerdidas.toFixed(2);

    //Sueldo líquido
    let sueldototal = totalganancias - totalPerdidas;
    document.getElementById('totalPagar').value = "Q" + sueldototal.toFixed(2);

    if (document.getElementById('sueldo') == null) {
        alert("Complete todos los campos requeridos");
    }
    else if (document.getElementById('comisiones') == null) {
        alert("Complete todos los campos requeridos");
    }

    else if (document.getElementById('ahorro') == null) {
        alert("Complete todos los campos requeridos");
    }

    else if (document.getElementById('otrosDescuentos') == null) {
        alert("Complete todos los campos requeridos");
    
    }


}

