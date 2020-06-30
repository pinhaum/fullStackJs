let olderName = prompt("qual o nome da pessoa mais velha?");
let olderAge = prompt("qual a idade da pessoa mais velha?");
let youngerName = prompt("qual o nome da pessoa mais nova??");
let youngerAge = prompt("qual a idade da pessoa mais nova??");

let difference = olderAge - youngerAge;

alert(
  `Pessoa mais velha: ${olderName} idade: ${olderAge}\nPessoa mais nova: ${youngerName} idade: ${youngerAge}\n diferença de idade: ${difference}`
);
