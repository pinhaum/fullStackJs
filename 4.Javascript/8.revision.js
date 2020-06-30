let spaceshipName = prompt("Qual o nome da espaçonave?");
let reverseName = "";
const forbiddenChar = "e";

console.log(reverseName);
for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] == forbiddenChar) {
    console.log(reverseName);
    break;
  }
  reverseName += spaceshipName[i];
}

alert(`Nome original: ${spaceshipName}\nNome após ocultação: ${reverseName} `);
