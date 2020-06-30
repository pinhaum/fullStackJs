class Spaceship {
  constructor(name, crewQuantity) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.isHitched = false;
    this.doorsOpen = false;
  }

  hitch() {
    this.isHitched = true;
    this.doorsOpen = true;
  }
}
/*
class Spacestation {
  constructor(docks) {
    this.docks = [];
  }

  docking(entry) {
    this.docks.push(entry);
  }
}*/

function showMenu() {
  let option;

  while (option != "1" && option != "2" && option != "3") {
    option = prompt(
      "1 - Engatar nave?\n2- Imprimir naves?\n3- Sair do programa"
    );
  }
  return option;
}

function createSpaceship() {
  let spaceshipName = prompt("Informe o nome da nave");
  let crewQuantity = prompt("informe a quantidade de tripulantes");
  let spaceship = new Spaceship(spaceshipName, crewQuantity);

  return spaceship;
}

function printSpaceshipList(spaceships) {
  let spaceshipList = "";
  spaceships.forEach((spaceship, index) => {
    spaceshipList +=
      index +
      1 +
      "- " +
      spaceship.name +
      " (" +
      spaceship.crewQuantity +
      " tripulantes) \n";
  });
  alert(spaceshipList);
}

let hitchedSpaceships = [];
let option;

while (option != "3") {
  option = showMenu();
  switch (option) {
    case "1":
      let spaceshipToAdd = createSpaceship();
      spaceshipToAdd.hitch();
      hitchedSpaceships.push(spaceshipToAdd);
      break;
    case "2":
      printSpaceshipList(hitchedSpaceships);
      break;
  }
}
