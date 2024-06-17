document.addEventListener('DOMContentLoaded', function () {
    var SueldoLiquido = /** @class */ (function () {
        function SueldoLiquido() {
            this.sueldo = 0;
            this.bonificacion = 250;
            this.comisiones = 0;
            this.ahorro = 0;
            this.igss = 0;
            this.prestamos = 0;
            this.tIngresos = 0;
            this.tEgresos = 0;
            this.totalFinal = 0;
        }
        SueldoLiquido.prototype.obtenerSueldo = function (sueldo) {
            this.sueldo = sueldo;
        };
        SueldoLiquido.prototype.obtenerComisiones = function (comisiones) {
            this.comisiones = comisiones;
        };
        SueldoLiquido.prototype.obtenerAhorros = function (ahorro) {
            this.ahorro = ahorro;
        };
        SueldoLiquido.prototype.obtenerPrestamo = function (prestamos) {
            this.prestamos = prestamos;
        };
        SueldoLiquido.prototype.calcularIgss = function (igss) {
            this.igss = this.sueldo * 0.0483;
        };
        SueldoLiquido.prototype.calcularTotalEgresos = function (tEgresos) {
            this.tEgresos = this.igss + this.prestamos + this.ahorro;
        };
        SueldoLiquido.prototype.calcularTotalIngresos = function (tIngresos) {
            this.tIngresos = this.comisiones + this.bonificacion + this.sueldo;
        };
        SueldoLiquido.prototype.calcularPorPagar = function () {
            this.totalFinal = (this.tIngresos - this.tEgresos);
            return "Q. " + this.totalFinal;
        };
        return SueldoLiquido;
    }());
    // Crear objeto de la clase AreaTriangulo
    var sueldoL = new SueldoLiquido();
    function calcularSueldito(event) {
        event.preventDefault();
        var sueldoInput = document.getElementById('sueldo');
        var comisionInput = document.getElementById('comisiones');
        var ahorroInput = document.getElementById('ahorro');
        var prestamosInput = document.getElementById('otrosDescuentos');
        var resultado1Input = document.getElementById("totalEgresos");
        var resultado2Input = document.getElementById("totalIngresos");
        var resultadoFinalInput = document.getElementById("totalPagar");
        if (sueldoInput || comisionInput || ahorroInput || prestamosInput) {
            var sueldoValue = parseFloat(sueldoInput.value);
            var comisionValue = parseFloat(comisionInput.value);
            var ahorroValue = parseFloat(ahorroInput.value);
            var prestamosValue = parseFloat(prestamosInput.value);
            if (isNaN(sueldoValue) || isNaN(comisionValue) || isNaN(prestamosValue) || isNaN(ahorroValue)) {
                resultado1Input.textContent = "únicamente se aceptan valores positivos mayores que 0";
                return;
            }
            sueldoL.obtenerSueldo(sueldoValue);
            sueldoL.obtenerComisiones(comisionValue);
            resultadoFinalInput.textContent = sueldoL.calcularPorPagar();
        }
    }
    var btnEnviarDatos = document.getElementById('btnEnviar');
    btnEnviarDatos.addEventListener('click', calcularSueldito);
});
