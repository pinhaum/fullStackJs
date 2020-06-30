class App {
  constructor() {
    this.spaceship = null;
  }

  start() {
    this.enrollSpaceship();

    let chosenOption;
    do {
      chosenOption = this.showInitialMenu();
      this.redirectFeature(chosenOption);
    } while (chosenOption != "3");

    this.printAndExit();
  }

  enrollSpaceship() {
    let spaceshipName = prompt("qual o nome da nave?");
    let maxCrew = prompt("Qual a quantidade de tripulantes?");

    let spaceshipType = this.askSpaceshipType();

    if (spaceshipType == "1") {
      let weapons = prompt("Quantas armas a nave possui?");
      this.spaceship = new Battleship(spaceshipName, maxCrew, weapons);
    } else {
      let seats = prompt("Quantos lugares a nave possui?");
      this.spaceship = new Transportship(spaceshipName, maxCrew, seats);
    }
  }

  askSpaceshipType() {
    let chosenOption;
    while (!["1", "2"].includes(chosenOption)) {
      chosenOption = prompt(
        "Qual o tipo da nave?\n 1- Batleship\n2- Transportship"
      );
    }
    return chosenOption;
  }

  showInitialMenu() {
    const promptMessage =
      "O que vocÊ deseja fazer? \n1- Acelerar a nave?\n2- Trocar a nave?\n3- Imprimir e sair?";

    let chosenOption = prompt(promptMessage);
    while (!["1", "2", "3"].includes(chosenOption)) {
      chosenOption = prompt(promptMessage);
    }
    return chosenOption;
  }

  redirectFeature(chosenOption) {
    switch (chosenOption) {
      case "1":
        this.accelerateSpaceship();
        break;
      case "2":
        this.enrollSpaceship();
        break;
      default:
        break;
    }
  }

  accelerateSpaceship() {
    let acceleration = Number(prompt("Quanto gostaria de acelerar?"));
    this.spaceship.speedUp(acceleration);
  }

  printAndExit() {
    let finalMessage = `Nome: ${this.spaceship.name}\nQuantidade máxima de tripulantes: ${this.spaceship.maxCrew}\nVelocidade atual: ${this.spaceship.currentSpeed}`;
    alert(finalMessage);
  }
}
