alert("Seja bem vindo! A seguir pediremos que informe alguns dados.");

let name = prompt("Qual o seu nome?");
let age = prompt("Qual a sua idade?");
let ageConfirm = confirm(`Sua idade é ${age}?`);

alert(`Nome: ${name}\nIdade: ${age}\n Confirmado pelo usuario? ${ageConfirm}`);
