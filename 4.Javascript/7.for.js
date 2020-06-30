let spaceshipName = prompt("Nome da espaçonave");
let input = prompt("qual caractere deseja substituir");
let maskInput = prompt("por qual caractere?");
let newName = "";

console.log(spaceshipName);
for (let i = 0; i < spaceshipName.length; i++) {
  console.log(input, maskInput, spaceshipName);
  if (spaceshipName[i] == input) {
    newName += maskInput;
  } else {
    newName += spaceshipName[i];
  }
}

alert(`O novo nome da nave é ${newName}`);

//do while
let velocity = 50;
let accelerate = 5;

do {
  velocity += accelerate;
  console.log(velocity);
} while (velocity <= 100);

//break
let name = "Supernova";

for (let i = 0; i < name.length; i++) {
  if (name[i] == "o") break;
  console.log(name[i]);
}
