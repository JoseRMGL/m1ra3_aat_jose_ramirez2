var Indenmizacion = /** @class */ (function () {
    function Indenmizacion() {
    }
    // valores
    Indenmizacion.prototype.asignarSueldoBase = function (valor) {
        this.sueldoBase = valor;
    };
    Indenmizacion.prototype.asignarCantidadAños = function (valor) {
        this.cantiadAños = valor;
    };
    Indenmizacion.prototype.asignarCantidadMeses = function (valor) {
        this.cantidadMeses = valor;
    };
    Indenmizacion.prototype.asignarSalarioPendiente = function (valor) {
        this.salarioPendiente = valor;
    };
    Indenmizacion.prototype.asignarDeudadYCobros = function (valor) {
        this.deudasYCobros = valor;
    };
    Indenmizacion.prototype.asignarBonoCatorce = function () {
        this.bonoCatorce = (this.sueldoBase / 12) * this.cantidadMeses;
    };
    Indenmizacion.prototype.asignarAguinaldo = function () {
        this.aguinaldo = (this.sueldoBase / 12) * this.cantidadMeses;
    };
    // metodos
    Indenmizacion.prototype.calcularBonoCatorce = function () {
        this.resultado = (this.sueldoBase / 12) * this.cantidadMeses;
        return "El bono catorce es: " + this.resultado;
    };
    Indenmizacion.prototype.calcularAguinaldo = function () {
        this.resultado = (this.sueldoBase / 12) * this.cantidadMeses;
        return "El aguinaldo es: " + this.resultado;
    };
    Indenmizacion.prototype.calcularIndemnizacion = function () {
        this.resultado = (this.sueldoBase * this.cantiadAños) + this.bonoCatorce + this.aguinaldo + this.salarioPendiente - this.deudasYCobros;
        return "La indemnizacion es: " + this.resultado;
    };
    return Indenmizacion;
}());
// objetos
var indenmizacion = new Indenmizacion();
var salario = document.getElementById("salario");
var bonoCatorce = document.getElementById("bonoCatorce");
var aguinaldo = document.getElementById("aguinaldo");
var resultado = document.getElementById("resultado");
var btnCalcular = document.getElementById("indemnizacion");
btnCalcular.addEventListener('click', indenmizacionFinal);
function valores() {
    indenmizacion.asignarBonoCatorce();
    indenmizacion.asignarAguinaldo();
    indenmizacion.asignarSueldoBase(parseFloat(document.getElementById("salario").value));
    indenmizacion.asignarSalarioPendiente(parseFloat(document.getElementById("salarioPendiente").value));
    indenmizacion.asignarDeudadYCobros(parseFloat(document.getElementById("deudas").value));
    indenmizacion.asignarCantidadAños(parseFloat(document.getElementById("cantidadDeAños").value));
    indenmizacion.asignarCantidadMeses(parseFloat(document.getElementById("cantidadDeMeses").value));
}
function indenmizacionFinal() {
    valores();
    bonoCatorce.textContent = indenmizacion.calcularBonoCatorce();
    aguinaldo.textContent = indenmizacion.calcularAguinaldo();
    resultado.textContent = indenmizacion.calcularIndemnizacion();
}
