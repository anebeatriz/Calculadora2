function calcula() {
    const num1 = parseFloat(document.getElementById('zeroum').value);
    const num2 = parseFloat(document.getElementById('zerodois').value);
    let resultado = 0;

    let oper = document.querySelector('input[name="operacao"]:checked').value;

    if(oper == 'soma'){
        resultado = num1 + num2;
    }
    if(oper == 'subtracao'){
        resultado = num1 - num2;
    }
    if(oper == 'multiplicacao'){
        resultado = num1 * num2;
    }
    if(oper == 'divisao'){
        if(num2 == 0){
            alert("não é permitido divisão por zero");
            return;
        }else{
            resultado = num1 / num2;
        }
    }else{
        alert("Escolher uma operação!");
        return
    }

    document.getElementById('resultado').innerText = resultado;
}
