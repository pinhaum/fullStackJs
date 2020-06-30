let name = prompt("Qual o nome do piloto?");
let velocity = 0;
let accelerate = prompt("Qual a velocidade que gostaria de acelerar a nave?");
let changeVelocity = confirm("gostaria de acelerar a nave?");

if (changeVelocity) velocity = accelerate;

if (velocity == 0) {
  console.log("Nave parada, considere partiir e aumentar a velocidade");
} else if (velocity < 0) {
  console.log("VocÊ está anmdando de ré");
} else if (velocity < 40) {
  console.log("Você está devagar, podemos aumentar mais");
} else if (velocity < 80) {
  console.log("Uma boa velocidade para se manter");
} else if (velocity < 100) {
  console.log("Velocidade alta, considere diminuir");
} else if (velocity >= 100) {
  console.log("velocidade perigosa");
}

console.log(`piloto: ${name}\n velocidade: ${velocity}`);
