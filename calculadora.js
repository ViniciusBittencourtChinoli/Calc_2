class Operacao {
    somar(a, b){
        return a + b;
    }
    subtrair(a, b){
        return a - b;
    }    
    multiplicar(a, b){
        return a * b;
    }
    dividir(a, b){
        return a / b;
    }
}

function calcular(op) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const calc = new Operacao();

    let resultado;

    switch (op) {
        case '+':
            resultado = calc.somar(num1, num2);
            break;
        case '-':
            resultado = calc.subtrair(num1, num2);
            break;            
        case '*':
            resultado = calc.multiplicar(num1, num2);
            break;
        case '/':
            resultado = calc.dividir(num1, num2);
            break;
    }    
    console.log("Resultado:", resultado);
    alert("Resultado: " + resultado);
}