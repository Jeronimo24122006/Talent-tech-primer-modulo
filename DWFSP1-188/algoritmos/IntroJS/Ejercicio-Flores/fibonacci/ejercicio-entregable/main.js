function fizzBuzz() {
    let n = document.getElementById("numero").value;
    let resultado = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += "fizzbuzz<br>";
        } else if (i % 3 === 0) {
            resultado += "fizz<br>";
        } else if (i % 5 === 0) {
            resultado += "buzz<br>";
        } else {
            resultado += i + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}
