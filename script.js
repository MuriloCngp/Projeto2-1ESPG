function Calcular(){
    //DECLARAR AS VARIÁVEIS
    let num1 = parseFloat (document.getElementById("num1").value);
    let num2 = parseFloat (document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML =num1 * num2;
}
