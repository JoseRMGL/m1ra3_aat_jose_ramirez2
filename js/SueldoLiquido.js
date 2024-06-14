var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
    }
    // asignar valores
    // Yo cree una clase y coloque una variable privada llamada igss, en mi programa la casilla de igss no tiene que tocarse, pero se tiene que utilizar en el codigo para realizar operaciones, el problema antes de la funcion addEventListener era que tenia que precionar 2 veces el boton que calcula todo para que el programa mostrara todos los resultados que nesesitaba, cuando colo que la funcion addEventListener al boton, dejo de hacer el problema y solo tenia que presionarlo una vez, yo supuse que el problema era asincronico, entonces por eso te dije que me dio una solucion a un problema asincronico , si entendiste lo que acabo de explicarte podrias darme alguna respuesta de es lo que paso? y de si en realidad era un problema de asincronia?
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
    SueldoLiquido.prototype.Igss = function () {
        this.resultado = this.salario * 0.0483;
        return "El IGSS es: " + this.resultado.toFixed(2);
    };
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
    return SueldoLiquido;
}());
// creacion de obtejos
var sueldoLiquido = new SueldoLiquido();
var resultado = document.getElementById("resultados");
var ganado = document.getElementById("totalGanado");
var descuentos = document.getElementById("totalDescuentos");
var igssAsignado = document.getElementById("igss");
var btnResultado = document.getElementById("btnCalcular");
btnResultado.addEventListener('click', totalGanado);
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
    igssAsignado.textContent = sueldoLiquido.Igss();
    ganado.textContent = sueldoLiquido.totalGanado();
    descuentos.textContent = sueldoLiquido.totalDescuentos();
    resultado.textContent = sueldoLiquido.sueldoLiquido();
}
