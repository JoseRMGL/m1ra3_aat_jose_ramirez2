class Indenmizacion {
    private sueldoBase: number;
    private cantiadAños: number;
    private cantidadMeses: number;
    private salarioPendiente: number;
    private deudasYCobros: number;
    private bonoCatorce: number;
    private aguinaldo: number;
    private resultado: number;
    // valores
    public asignarSueldoBase(valor: number) {
        this.sueldoBase = valor;
    }
    public asignarCantidadAños(valor: number) {
        this.cantiadAños = valor;
    }
    public asignarCantidadMeses(valor: number) {
        this.cantidadMeses = valor;
    }
    public asignarSalarioPendiente(valor: number) {
        this.salarioPendiente = valor;
    }
    public asignarDeudadYCobros(valor: number) {
        this.deudasYCobros = valor;
    }
    public asignarBonoCatorce() {
        this.bonoCatorce = (this.sueldoBase / 12) * this.cantidadMeses;
    }
    public asignarAguinaldo() {
        this.aguinaldo = (this.sueldoBase / 12) * this.cantidadMeses;
    }
    // metodos
    public calcularBonoCatorce() {
        this.resultado = (this.sueldoBase / 12) * this.cantidadMeses;
        return "El bono catorce es: " + this.resultado;
    }
    public calcularAguinaldo() {
        this.resultado = (this.sueldoBase / 12) * this.cantidadMeses;
        return "El aguinaldo es: " + this.resultado;
    }
    public calcularIndemnizacion() {
        this.resultado = (this.sueldoBase * this.cantiadAños) + this.bonoCatorce + this.aguinaldo + this.salarioPendiente - this.deudasYCobros;
        return "La indemnizacion es: " + this.resultado;
    }
}
// objetos
const indenmizacion = new Indenmizacion();
const salario = document.getElementById("salario") as HTMLParagraphElement;
const bonoCatorce = document.getElementById("bonoCatorce") as HTMLParagraphElement;
const aguinaldo = document.getElementById("aguinaldo") as HTMLParagraphElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;
const btnCalcular = document.getElementById("indemnizacion") as HTMLParagraphElement;
btnCalcular.addEventListener('click', indenmizacionFinal);

function valores(){
    indenmizacion.asignarBonoCatorce();
    indenmizacion.asignarAguinaldo();
    indenmizacion.asignarSueldoBase(parseFloat((document.getElementById("salario") as HTMLInputElement).value));
    indenmizacion.asignarSalarioPendiente(parseFloat((document.getElementById("salarioPendiente") as HTMLInputElement).value));
    indenmizacion.asignarDeudadYCobros(parseFloat((document.getElementById("deudas") as HTMLInputElement).value));
    indenmizacion.asignarCantidadAños(parseFloat((document.getElementById("cantidadDeAños") as HTMLInputElement).value));
    indenmizacion.asignarCantidadMeses(parseFloat((document.getElementById("cantidadDeMeses") as HTMLInputElement).value));
}

function indenmizacionFinal() {
    valores();
    bonoCatorce.textContent = indenmizacion.calcularBonoCatorce();
    aguinaldo.textContent = indenmizacion.calcularAguinaldo();
    resultado.textContent = indenmizacion.calcularIndemnizacion();
}