class SueldoLiquido {
    private salario: number;
    private bonificacion: number;
    private comisiones: number;
    private ahorro: number;
    private prestamos: number;
    private igss: number;
    private resultado: number;
    // asignar valores
    public asignarSalario(valor: number) {
        this.salario = valor;
    }
    public asignarIgss() {
        this.igss = this.salario * 0.0483;
    }
    public asignarBonificacion(valor: number) {
        this.bonificacion = valor;
    }
    public asignarComisiones(valor: number) {
        this.comisiones = valor;
    }
    public asignarAhorro(valor: number) {
        this.ahorro = valor;
    }
    public asignarPrestamos(valor: number) {
        this.prestamos = valor;
    }
    // asignar metodos
    public totalGanado() {
        this.resultado = this.salario + this.bonificacion + this.comisiones;
        return "El total ganado es: " + this.resultado.toFixed(2);
    }
    public totalDescuentos() {
        this.resultado = this.ahorro + this.igss + this.prestamos;
        return "El total Descuentos es: " + this.resultado.toFixed(2);
    }
    public sueldoLiquido() {
        this.resultado = (this.salario + this.bonificacion + this.comisiones) - (this.ahorro + this.igss + this.prestamos);
        return "El sueldo liquido es: " + this.resultado.toFixed(2);
    }
    public Igss() {
        this.resultado = this.salario * 0.0483;
        return "El IGSS es: " + this.resultado.toFixed(2);
    }
}
// creacion de obtejos
const sueldoLiquido = new SueldoLiquido();
const resultado = document.getElementById("resultados") as HTMLParagraphElement;
const ganado = document.getElementById("totalGanado") as HTMLParagraphElement;
const descuentos = document.getElementById("totalDescuentos") as HTMLParagraphElement;
const asignarIgss = document.getElementById("igss") as HTMLParagraphElement;
function valores() {
    sueldoLiquido.asignarIgss();
    sueldoLiquido.asignarSalario(parseFloat((document.getElementById("salario") as HTMLInputElement).value));
    sueldoLiquido.asignarBonificacion(parseFloat((document.getElementById("bonificacion") as HTMLInputElement).value));
    sueldoLiquido.asignarComisiones(parseFloat((document.getElementById("comisiones") as HTMLInputElement).value));
    sueldoLiquido.asignarAhorro(parseFloat((document.getElementById("ahorro") as HTMLInputElement).value));
    sueldoLiquido.asignarPrestamos(parseFloat((document.getElementById("prestamos") as HTMLInputElement).value));
}
function totalGanado() {
    valores();
    asignarIgss.textContent = sueldoLiquido.Igss();
    ganado.textContent = sueldoLiquido.totalGanado();
    descuentos.textContent = sueldoLiquido.totalDescuentos();
    resultado.textContent = sueldoLiquido.sueldoLiquido();
}