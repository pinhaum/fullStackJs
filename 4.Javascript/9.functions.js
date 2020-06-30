let spaceshipName = prompt("Qual o nome da nave?");
let velocity = 0;
let choosenOption;

function menu() {
  let option;

  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt(
      "Escolha uma opção:\n1.Acelerar\n2.desacelerar\n3.Mostrar dados\n4.Sair do programa"
    );
  }
  return option;
}

do {
  choosenOption = menu();
  switch (choosenOption) {
    case "1":
      velocity = accelerate(velocity);
      break;
    case "2":
      velocity = desaccelerate(velocity);
      break;
    case "3":
      printData();
      break;
    default:
      alert("encerrando progrmaa de bordo");
      break;
  }
} while (choosenOption != "4");

function accelerate(velocity) {
  let newVelocity = velocity + 5;
  return newVelocity;
}

function desaccelerate(velocity) {
  let newVelocity = velocity - 5;
  if (newVelocity < 0) newVelocity = 0;
  return newVelocity;
}

function printData() {
  alert(`Nome da nave: ${spaceshipName}\nVelocidade: ${velocity}`);
}
