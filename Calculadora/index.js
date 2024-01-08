/* PASSO A PASSO PARA USAR O FORM

    1 - [x] FAZ O GET DO ELEMENTO FORM
    2 - [x] ADICIONA NO FORM O EVENTO LISTENER
      2.1 - [] NO EVENT LISTENER DIGA O NOME DO EVENTO
      2.2 - [] DEPOIS PASSE UMA FUNÇÃO ANÔNIMA PARA RECEBER O EVENTO COMO PARÂMETRO
      2.3 - [] USE O PREVENT DEFAULT NO EVENTO RECEBIDO COMO PARAMETRO
      2.4 - [] CHAME A FUNÇÃO QUE QUISER
    3 - [] CRIE A FUNÇÃO E PEGUE OS DADOS DO FORM
    4 - [] SEJA FELIZ 
    */

const nome = prompt("Insira seu nome");
nome.innerText = `Olá ${nome}, Benvindo ao meu protótipo de calculadora`;
let resultado = 0;
const form = document.querySelector("form");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  calcular();
});

const numero1 = document.getElementById("number-one");
const numero2 = document.getElementById("number-two");
const opcoes = document.getElementById("operator");

const resultadoCalculo = document.getElementById("resultado-calculo");

function calcular() {
  // debugger;
  switch (opcoes.value) {
    case "soma":
      soma();
      break;
    case "subtracao":
      subtracao();
      break;
    case "divisao":
      divisao();
      break;
    case "multiplicacao":
      multiplicacao();
      break;
  }
}

function soma() {
  resultado =
    Number(numero1.value.replace(",", ".")) +
    Number(numero2.value.replace(",", "."));
  resultadoCalculo.innerText = `O resultado da soma é ${resultado}`;
}

function subtracao() {
  resultado = Number(numero1.value.replace(",", ".")) - Number(numero2.value);
  resultadoCalculo.innerText = `O resultado da subtração é ${resultado}`;
}

function divisao() {
  resultado = Number(numero1.value) / Number(numero2.value);
  resultadoCalculo.innerText = `O resultado da divisão é ${resultado}`;
}

function multiplicacao() {
  resultado = Number(numero1.value) * Number(numero2.value);
  resultadoCalculo.innerText = `O resultado da multiplicação é ${resultado}`;
}

// resultadoCalculo.innerText = `O resultado da multiplicação é ${resultado}`;
