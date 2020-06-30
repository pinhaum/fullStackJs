class Spaceship {
  constructor(name, maxCrew, maxRecomemendedSpeed) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecomemendedSpeed = maxRecomemendedSpeed;
    this.currentSpeed = 0;
  }

  speedUp(acceleration) {
    this.currentSpeed += acceleration;
    if (this.currentSpeed > this.maxRecomemendedSpeed) {
      alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!!!!");
    }
  }

  stop() {
    alert("sua nave não tem coisas específicas a fazer antes de parar");
  }
}

class BattleSpaceship extends Spaceship {
  stop() {
    this.currentSpeed = 0;
    alert("Recolhendo armas e parando nave de batalha");
  }
}

class DiscoverySpaceship extends Spaceship {
  stop() {
    this.currentSpeed = 0;
    alert("Recolhendo equipamentos e parando nave de descoberta");
  }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200);
let fenix = new BattleSpaceship("Fenix", 8, 240);

darwin.speedUp(210);
fenix.speedUp(230);

darwin.stop();
fenix.stop();

let ahu = new Spaceship("AHU", 2, 80);

ahu.speedUp(800);
ahu.stop();
