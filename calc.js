<!DOCTYPE html>
<html lang="pt-BR">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calc</title>
    
</head>
<body>
    <h1>Calculadora</h1>
    <p>Numero: <input id="visor1" type="text" placeholder="digite um numero"></p> 
    <p>Numero: <input id="visor2" type="text" placeholder="digite um numero"></p>
    

    <input type="button" onclick="somar()" value="+">
    <input type="button" onclick="subtrair()" value="-">
    <input type="button" onclick="dividir()" value="/">
    <input type="button" onclick="multiplicar()" value="x">
    <p><p>Resultado: <input id="resultado" type="text" placeholder="resultado" ></p></p>

    <script>
        function somar(){
            const num1 = document.querySelector("#visor1").value
            const num2 = document.querySelector("#visor2").value
            const op = Number(num1) + Number(num2)
            const resul = document.querySelector("#resultado").value = op
     }

        function subtrair(){
            const num1 = document.querySelector("#visor1").value
            const num2 = document.querySelector("#visor2").value
            const op = Number(num1) - Number(num2)
            const resul = document.querySelector("#resultado").value = op
         }

        function dividir() {
            const num1 = document.querySelector("#visor1").value
            const num2 = document.querySelector("#visor2").value
            const op = Number(num1) / Number(num2)
            const resul = document.querySelector("#resultado").value = op
        }

        function multiplicar() {
            const num1 = document.querySelector("#visor1").value
            const num2 = document.querySelector("#visor2").value
            const op = Number(num1) * Number(num2)
            const resul = document.querySelector("#resultado").value = op
        }

    </script>



    
</body>
</html>
