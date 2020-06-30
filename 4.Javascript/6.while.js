let spaceshipName = prompt("Qual o nome da sua nave?");
let enterFold = "";
let warpCount = 0;

while (enterFold != 2) {
  enterFold = prompt("Gostaria de iniciar uma dobra espacial?\n1. Sim\n2. Não");
  if (enterFold == 1) warpCount += 1;
}

alert(`Nave: ${spaceshipName}\n Quantidade de dobras: ${warpCount}`);
