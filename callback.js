const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const operaciones = (num1, num2, callback) => {
    let resultado = callback(num1, num2)
    return resultado;
}

let resultadoOperacion = operaciones(4,5, multiplicar)
console.log(resultadoOperacion)