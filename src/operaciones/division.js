function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: ambos argumentos deben ser numeros.";
  } else if (b === 0) {
    return "Error: no se puede dividir por cero.";
  } else if (a === 0) {
    return 0;
  } else {
    return a / b;
  }
}

export default dividir;
