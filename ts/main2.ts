document.addEventListener('DOMContentLoaded', () => {
    class SueldoLiquido {
        private sueldo: number = 0;
        private bonificacion: number = 250;
        private comisiones: number = 0;
        private ahorro: number =0;
        private igss: number =0;
        private prestamos: number =0;
        private tIngresos=0;
        private tEgresos=0;
        private totalFinal=0;
        

        public obtenerSueldo(sueldo: number) {
            this.sueldo = sueldo;
        }

        public obtenerComisiones(comisiones: number) {
            this.comisiones = comisiones;
        }

        public obtenerAhorros(ahorro: number) {
            this.ahorro = ahorro;
        }

        public obtenerPrestamo(prestamos: number) {
            this.prestamos = prestamos;
        }


        public calcularIgss(igss: number) {
            this.igss=this.sueldo*0.0483;
        } 

        public calcularTotalEgresos(tEgresos :number){
           this.tEgresos= this.igss+ this.prestamos+this.ahorro;
        }

        public calcularTotalIngresos(tIngresos :number){
           this.tIngresos= this.comisiones+ this.bonificacion+this.sueldo;
         }

         public calcularPorPagar():string{
            this.totalFinal=(this.tIngresos-this.tEgresos)
            return "Q. " + this.totalFinal;
         }


    }

    // Crear objeto de la clase AreaTriangulo
    const sueldoL = new SueldoLiquido();

    function calcularSueldito(event: Event) {
        event.preventDefault();
        const sueldoInput = document.getElementById('sueldo') as HTMLInputElement;
        const comisionInput = document.getElementById('comisiones') as HTMLInputElement;
        const ahorroInput = document.getElementById('ahorro') as HTMLInputElement;
        const prestamosInput = document.getElementById('otrosDescuentos') as HTMLInputElement;

        const resultado1Input = document.getElementById("totalEgresos") as HTMLInputElement;
        const resultado2Input = document.getElementById("totalIngresos") as HTMLInputElement;
        const resultadoFinalInput = document.getElementById("totalPagar") as HTMLInputElement;


        if (sueldoInput || comisionInput || ahorroInput|| prestamosInput) {
            const sueldoValue = parseFloat(sueldoInput.value);
            const comisionValue = parseFloat(comisionInput.value);
            const ahorroValue = parseFloat(ahorroInput.value);
            const prestamosValue = parseFloat (prestamosInput.value);

            if (isNaN(sueldoValue) || isNaN(comisionValue) ||isNaN(prestamosValue)  ||  isNaN(ahorroValue) ) {
                resultado1Input.textContent = "únicamente se aceptan valores positivos mayores que 0";
                return;
            }

            sueldoL.obtenerSueldo(sueldoValue);
            sueldoL.obtenerComisiones(comisionValue);
            resultadoFinalInput.textContent = sueldoL.calcularPorPagar();
        }
    }
    const btnEnviarDatos = document.getElementById('btnEnviar') as HTMLButtonElement;
        btnEnviarDatos.addEventListener('click', calcularSueldito);
    
});
