let pantalla = document.getElementById("pantalla");
let numeroActual = "0";
let numeroAnterior = "";
let operador = "";
let reiniciar = false;

function mostrar() {
  pantalla.textContent = numeroActual;
}

function agregarNumero(valor) {
  if (reiniciar || numeroActual === "Error") {
    numeroActual = "0";
    reiniciar = false;
  }

  if (valor === ".") {
    if (!numeroActual.includes(".")) {
      numeroActual += ".";
    }
  } else if (numeroActual === "0") {
    numeroActual = valor;
  } else {
    numeroActual += valor;
  }

  mostrar();
}

function elegirOperador(op) {
  if (operador !== "" && !reiniciar) {
    calcular();
  }
  numeroAnterior = numeroActual;
  operador = op;
  reiniciar = true;
}

function calcular() {
  if (operador === "") {
    return;
  }

  let a = parseFloat(numeroAnterior);
  let b = parseFloat(numeroActual);
  let resultado;

  if (operador === "+") {
    resultado = a + b;
  } else if (operador === "-") {
    resultado = a - b;
  } else if (operador === "*") {
    resultado = a * b;
  } else if (operador === "/") {
    if (b === 0) {
      numeroActual = "Error";
      operador = "";
      reiniciar = true;
      mostrar();
      return;
    }
    resultado = a / b;
  }

  numeroActual = String(Math.round(resultado * 1000000) / 1000000);
  operador = "";
  reiniciar = true;
  mostrar();
}

function borrarTodo() {
  numeroActual = "0";
  numeroAnterior = "";
  operador = "";
  reiniciar = false;
  mostrar();
}

function borrarEntrada() {
  numeroActual = "0";
  mostrar();
}
