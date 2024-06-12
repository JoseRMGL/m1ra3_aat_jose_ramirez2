var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
    }
    // asignar valores
    SueldoLiquido.prototype.asignarSalario = function (valor) {
        this.salario = valor;
    };
    SueldoLiquido.prototype.asignarIgss = function () {
        this.igss = this.salario * 0.0483;
    };
    SueldoLiquido.prototype.asignarBonificacion = function (valor) {
        this.bonificacion = valor;
    };
    SueldoLiquido.prototype.asignarComisiones = function (valor) {
        this.comisiones = valor;
    };
    SueldoLiquido.prototype.asignarAhorro = function (valor) {
        this.ahorro = valor;
    };
    SueldoLiquido.prototype.asignarPrestamos = function (valor) {
        this.prestamos = valor;
    };
    // asignar metodos
    SueldoLiquido.prototype.totalGanado = function () {
        this.resultado = this.salario + this.bonificacion + this.comisiones;
        return "El total ganado es: " + this.resultado.toFixed(2);
    };
    SueldoLiquido.prototype.totalDescuentos = function () {
        this.resultado = this.ahorro + this.igss + this.prestamos;
        return "El total Descuentos es: " + this.resultado.toFixed(2);
    };
    SueldoLiquido.prototype.sueldoLiquido = function () {
        this.resultado = (this.salario + this.bonificacion + this.comisiones) - (this.ahorro + this.igss + this.prestamos);
        return "El sueldo liquido es: " + this.resultado.toFixed(2);
    };
    SueldoLiquido.prototype.Igss = function () {
        this.resultado = this.salario * 0.0483;
        return "El IGSS es: " + this.resultado.toFixed(2);
    };
    return SueldoLiquido;
}());
// creacion de obtejos
// const igss: number = (parseFloat((document.getElementById("igss") as HTMLInputElement).value));
var sueldoLiquido = new SueldoLiquido();
var resultado = document.getElementById("resultados");
var ganado = document.getElementById("totalGanado");
var descuentos = document.getElementById("totalDescuentos");
var asignarIgss = document.getElementById("igss");
function valores() {
    sueldoLiquido.asignarIgss();
    sueldoLiquido.asignarSalario(parseFloat(document.getElementById("salario").value));
    sueldoLiquido.asignarBonificacion(parseFloat(document.getElementById("bonificacion").value));
    sueldoLiquido.asignarComisiones(parseFloat(document.getElementById("comisiones").value));
    sueldoLiquido.asignarAhorro(parseFloat(document.getElementById("ahorro").value));
    sueldoLiquido.asignarPrestamos(parseFloat(document.getElementById("prestamos").value));
}
function totalGanado() {
    valores();
    asignarIgss.textContent = sueldoLiquido.Igss();
    ganado.textContent = sueldoLiquido.totalGanado();
    descuentos.textContent = sueldoLiquido.totalDescuentos();
    resultado.textContent = sueldoLiquido.sueldoLiquido();
}
